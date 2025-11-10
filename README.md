# Mobile Automation Project

## 🚀 Como Executar os Testes Mobile

Este projeto suporta execução em **dispositivos físicos** e em **emuladores Android**, além de execução automática no **GitHub Actions (CI)**.

---

### 1) Pré-requisitos

| Ferramenta | Versão sugerida |
|-----------|----------------|
| Node.js   | 18+ ou 20+     |
| Java JDK  | 11+            |
| Android SDK | Instalado e configurado |
| Appium 2.x | Instalado globalmente |
| Appium Drivers (uiautomator2) | Instalado |

```bash
npm install
appium driver install uiautomator2
```

---

### 2) Executando em Dispositivo Físico (Android)

1. Ative **Modo Desenvolvedor** no celular
2. Ative **Depuração USB**
3. Conecte o celular via USB
4. Confirme que o device está listado:

```bash
adb devices
```

5. Execute os testes:

```bash
npx wdio run wdio.conf.js
```

---

### 3) Executando em Emulador Android (Local)

```bash
$ANDROID_HOME/emulator/emulator -avd <nome_do_emulador>
adb devices
npx wdio run wdio.conf.js
```

Caso ainda não tenha um AVD criado:

```bash
echo "no" | avdmanager create avd -n test -k "system-images;android-30;google_apis;x86" --force
```

---

### 4) Executando no GitHub Actions (CI)

A execução em CI cria automaticamente um **emulador Android**.

O workflow está no arquivo:

```
.github/workflows/ci.yml
```

Para executar manualmente:

1. Vá até a aba **Actions**
2. Selecione o workflow **CI Mobile Tests**
3. Clique em **Run workflow**

---

### 5) Visualizando o Allure Report

Depois da execução dos testes:

**Localmente:**

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

**No GitHub Actions:**

1. Acesse o job executado
2. Baixe o artefato **allure-report.zip**
3. Abra `index.html` no navegador

---

### 📌 Observação Importante

Para rodar testes em **dispositivo físico dentro do CI**, é necessário configurar um **Self-Hosted Runner** na sua máquina.  
O CI já está preparado para isso no job:

```
physical-device-android
```

Caso deseje, peça: **"Quero configurar o runner físico"** e te guio passo a passo.
