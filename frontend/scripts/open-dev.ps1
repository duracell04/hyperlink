$ErrorActionPreference = 'SilentlyContinue'

function Get-FreePort {
  param([int[]]$Candidates)
  foreach ($p in $Candidates) {
    if (-not (Get-NetTCPConnection -State Listen -LocalPort $p -ErrorAction SilentlyContinue)) {
      return $p
    }
  }
  return $null
}

# Resolve frontend root based on this script location
$frontend = Resolve-Path (Join-Path $PSScriptRoot '..')

# Stop any existing Next dev processes
Get-CimInstance Win32_Process |
  Where-Object {
    $_.CommandLine -like '*next dev*' -or
    $_.CommandLine -match '\\next\\dist\\bin\\next(\.cmd)?\b.*\bdev\b'
  } |
  ForEach-Object { try { Stop-Process -Id $_.ProcessId -Force } catch {} }

# Remove stale lock file if present
$lockPath = Join-Path $frontend '.next\dev\lock'
if (Test-Path $lockPath) { Remove-Item $lockPath -Force }

# Pick a free port
$port = Get-FreePort (3000..3099); if (-not $port) { $port = 3050 }

# Start dev server in a new PowerShell window
$cdCmd = 'cd "{0}"' -f $frontend
$devCmd = '{0}; pnpm dev -- -p {1}' -f $cdCmd, $port
Start-Process powershell -ArgumentList '-NoExit','-NoProfile','-Command', $devCmd | Out-Null

# Wait up to 60s for readiness, then open default browser
$deadline = (Get-Date).AddSeconds(60)
while ((Get-Date) -lt $deadline) {
  try {
    $r = Invoke-WebRequest -Uri ("http://localhost:{0}" -f $port) -UseBasicParsing -TimeoutSec 1
    if ($r.StatusCode -ge 200) {
      Start-Process ("http://localhost:{0}" -f $port)
      Write-Output ("READY:{0}" -f $port)
      break
    }
  } catch {}
  Start-Sleep -Milliseconds 500
}

