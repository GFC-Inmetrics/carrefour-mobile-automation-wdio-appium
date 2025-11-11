
# Projeto de Automação Mobile com WebdriverIO + Appium

Este projeto tem como objetivo realizar testes automatizados em aplicações mobile Android e iOS, utilizando **WebdriverIO**, **Appium**, **Mocha** e o padrão **Page Object Model (POM)**. Além disso, conta com **Allure Reports** para geração de relatórios detalhados.

---

## - Estrutura do Projeto

```
.
├── test
│   ├── pages
│   │   ├── forms.page.js        # Page Object da tela Forms
│   │   └── login.page.js        # Page Object da tela Login
│   └── specs
│       ├── forms.spec.js        # Testes da tela Forms
│       └── login.spec.js        # Testes da tela Login
├── wdio.conf.js                 # Configuração principal do WebdriverIO e Appium
├── package.json
└── README.md
```

---

## - Principais Tecnologias

| Tecnologia | Descrição |
|----------|-----------|
| **JavaScript (Node.js)** | Linguagem principal do projeto |
| **WebdriverIO** | Framework de automação |
| **Appium** | Automação mobile Android/iOS |
| **Mocha** | Framework de testes |
| **Allure Reports** | Geração de relatórios |
| **Page Object Model** | Estrutura organizada de páginas |

---

## - Configuração de Plataforma

A execução é definida pelas variáveis:

| Variável | Valor | Descrição |
|--------|-------|-----------|
| `PLATFORM` | android / ios | Sistema operacional alvo |
| `DEVICE` | real / emulator | Tipo do dispositivo |

### Exemplos:

Executar em **Android real**:

```
PLATFORM=android DEVICE=real
 - Estabelecer conexão com porta: 4723 via comandos:
    `npx appium` - conexão com servidor é estebelecida, capabities já possuí as configurações para conexão com essa porta.
 - Validar conexão com celular via comando:`adb connect 192.168.0.89:5555`, caso esteja conectado irá exibir informação.
 - Abrir novo terminal bash e executar comando de execução de testes:`npx wdio run wdio.conf.js`
```

Executar em **Android Emulator**:

```
PLATFORM=android DEVICE=emulator npx wdio run wdio.conf.js
 - Possuir varíaveis de ambientes configuradas para execução:
 `Path`: inserir - nova pasta: "%ANDROID_HOME%\platform-tools" e "%ANDROID_HOME%\cmdline-tools\latest\bin"
 `ANDROID_SDK_ROOT`- "C:\Users\guilherme.clemente\Android\Sdk" substituir 'guilherme.clemente' pelo nome de usuário local e alterar caminho caso necessário.
 `ANDROID_HOME`- "C:\Users\guilherme.clemente\Android\Sdk" substituir 'guilherme.clemente' pelo nome de usuário local e alterar caminho caso necessário.
```

Executar em **iOS Simulator**:

```
PLATFORM=ios DEVICE=emulator npx wdio run wdio.conf.js
- Executar em iOS Simulator
Comando de execução:
`PLATFORM=ios DEVICE=emulator npx wdio run wdio.conf.js`
Pré-requisitos:
Xcode instalado
`xcode-select --install`
Aceitar licenças do Xcode
`sudo xcodebuild -license accept`
App compilado para simulador (.app)
WebDriverAgent configurado no Xcode com assinatura válida
Configuração no wdio.conf.js:
Indicar caminho correto do app para simulador:
`'appium:app': '/Users/seuUsuario/path/WdioDemoApp.app'`
```

---

## - Capacidades configuradas (wdio.conf.js)

- **Android Real Device**
- **Android Emulator**
- **iOS Simulator**

```js
function selectCapabilities() {
  if (platform === 'android' && deviceType === 'real') return [androidRealDevice];
  if (platform === 'android' && deviceType === 'emulator') return [androidEmulator];
  if (platform === 'ios' && deviceType === 'emulator') return [iosSimulator];
}
```

---

## - Estrutura do Page Object

### Exemplo: `forms.page.js`

Responsável por encapsular localizadores e ações da tela **Forms**.

```js
get typeSomethingField(){
  return $('~text-input');
}

async fillTypeSomethingField(text) {
  await this.typeSomethingField.setValue(text);
}
```

### Exemplo: `login.page.js`

Responsável por fluxo de Login / Sign Up.

```js
async signUp(email, password, confirmPassword) {
  await this.inputEmail.setValue(email);
  await this.inputPassword.setValue(password);
  await this.inputConfirmPassword.setValue(confirmPassword);
}
```

---

## - Execução dos Testes

Rodar todos os testes:

```
npx wdio run wdio.conf.js
```

---

## - Relatórios Allure

Gerar relatório após execução:

```
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

