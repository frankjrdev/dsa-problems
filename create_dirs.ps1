# Script para crear la estructura de directorios
$languages = @("typescript", "python", "java")
$platforms = @("leetcode", "hackerrank", "codewars", "neetcode", "algoexpert", "cs50")
$difficulties = @("easy", "medium", "hard")

foreach ($lang in $languages) {
    foreach ($platform in $platforms) {
        foreach ($difficulty in $difficulties) {
            $path = ".\$lang\src\$platform\$difficulty"
            if (-not (Test-Path $path)) {
                New-Item -ItemType Directory -Force -Path $path | Out-Null
                Write-Host "Created: $path"
            }
        }
    }
}

Write-Host "Estructura de directorios creada exitosamente!" -ForegroundColor Green
