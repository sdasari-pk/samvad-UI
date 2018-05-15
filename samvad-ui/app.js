var botui = new BotUI('samvad-ui');
var actionBtns1 = [
                    {
                        text: 'MSTFJ Basics',
                        value: 'MSTFJ_BASICS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'MSTFJ environment setup',
                        value: 'MSTFJ_SETUP',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'MSTFJ ecosystem',
                        value: 'MSTFJ_ECOSYSTEM',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'CICD',
                        value: 'CICD',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Cloud Support',
                        value: 'CLOUD_SUPPORT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Test & QA',
                        value: 'TEST_AND_QA',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Repo Examples',
                        value: 'REPO_EXAMPLES',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns2 = [
                    {
                        text: 'Overview',
                        value: 'OVERVIEW',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Official MSTFJ Slides',
                        value: 'MSTFJ_SLIDES',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'MSTFJ Screenshots',
                        value: 'MSTFJ_SCREENSHOTS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Video Tutorial',
                        value: 'VIDEO_TUTORIAL',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Live Dashboard',
                        value: 'LIVE_DASHBOARD',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_MSTFJ_BASICS = [
                    {
                        text: 'Continue with MSTFJ Basics',
                        value: 'CONTINUE_MSTFJBASICS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_MSTFJ_ENV = [
                    {
                        text: 'Continue with MSTFJ Environment Setup',
                        value: 'CONTINUE_MSTFJENV_SETUP',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_MSTFJ_ECOSYS = [
                    {
                        text: 'Continue with MSTFJ Ecosystem',
                        value: 'CONTINUE_MSTFJ_ECOSYS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns4 = [
                    {
                        text: 'Prerequisites',
                        value: 'PREREQUISITES',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Install Archtype',
                        value: 'INSTALL_ARCHTYPE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Generate Microservice Project',
                        value: 'GENERATE_PROJECT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Import code in IDE',
                        value: 'IMPORT_CODE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Config your project',
                        value: 'CONFIG_PROJECT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Run your project',
                        value: 'RUN_PROJECT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Setup Environment via Docker',
                        value: 'SETUPENV_DOCKER',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Code Generator',
                        value: 'CODE_GENERATOR',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns5 = [
                    {
                        text: 'Gateway',
                        value: 'GATEWAY',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Authentication Service',
                        value: 'AUTH_SERVICE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Registry Server',
                        value: 'REGISTRY_SERVER',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Diagnostic Server',
                        value: 'DIAGNOSTIC_SERVER',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Microservice Dashboard',
                        value: 'MICROSERVICE_DASHBOARD',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Elk Log Management',
                        value: 'ELK_LOG_MGMT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Splunk Log Management',
                        value: 'SPLUNK_LOG_MGMT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns6 = [
                    {
                        text: 'Setting up Jenkins Job',
                        value: 'SETUP_JENKINSJOB',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Docker Image',
                        value: 'DOCKER_IMAGE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns6_CICD = [
                    {
                        text: 'Continue with CICD',
                        value: 'CONTINUE_CICD',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_CloudSupport = [
                    {
                        text: 'App Dynamics',
                        value: 'APP_DYNAMICS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Cloud Foundry PCF',
                        value: 'CF_PCF',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Cloud Foundry Bluemix',
                        value: 'CF_BLUEMIX',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'AWS',
                        value: 'AWS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var continueActions_CloudSupport = [
                    {
                        text: 'Continue with Cloud Support',
                        value: 'CONTINUE_CLOUDSUPPORT',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_TQA = [
                    {
                        text: 'Test Supported by MSFTFJ',
                        value: 'TEST_SUPPORT_MSFTFJ',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Test Execution',
                        value: 'TEST_EXE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'CDC',
                        value: 'CDC',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var continueActions_TQA = [
                    {
                        text: 'Continue with Test & QA',
                        value: 'CONTINUE_TESTQA',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_RepoEx = [
                    {
                        text: 'This tutorial is interesting. I want to continue with Tutorials',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Tutorials are interesting but I would like to Create My Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_Login = [
                    {
                        text: 'Google',
                        value: 'GOOGLE_LOGIN',
                        cssClass: 'padforbtn',
                        icon:'fab fa-google'
                    }
                   ,{
                        text: 'Facebook',
                        value: 'FACEBOOK_LOGIN',
                        cssClass: 'padforbtn',
                        icon:'fab fa-facebook'
                    }
                   ,{
                        text: 'Github',
                        value: 'GITHUB_LOGIN',
                        cssClass: 'padforbtn',
                        icon:'fab fa-github'
                    }
                   ,{
                        text: 'I do not want to login now.',
                        value: 'CONTINUE_TUTORIALS',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_Templates = [
                    {
                        text: 'Serverless',
                        value: 'SERVERLESS_TEMPLATE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'PKMST',
                        value: 'PKMST_TEMPLATE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Drop Wizard',
                        value: 'DROP_WIZARD_TEMPLATE',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'I will create repo later.Show me tasks before I create a repo.',
                        value: 'SHOW_TASKS',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_Tasks = [
                    {
                        text: 'Get all Tasks',
                        value: 'ALL_TASKS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Get Tasks by User ID',
                        value: 'TASK_BY_USER_ID',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Get Tasks created by myself',
                        value: 'MY_TASKS',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Create Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Logout.',
                        value: 'LOGOUT',
                        cssClass: 'padforbtn'
                    }
                ];
var actionBtns_TasksActions = [
                    {
                        text: 'Deploy a repo',
                        value: 'DEPLOY',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Create Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'Logout.',
                        value: 'LOGOUT',
                        cssClass: 'padforbtn'
                    }
                ];
var loadingMsgIndex;
//var API = 'http://localhost:8081/prokarma/samvad/service/';
var GETAPI = 'https://samvad-service.mybluemix.net/prokarma/integrategit/auth-url/';
var API = 'https://samvad-service.mybluemix.net/prokarma/samvad/service/';


botui.message
    .bot('Hello! Welcome to Prokarma interactive web. Get ready to experience a whole new way of web interaction!')
    .then(function() {
        return botui.action.button({
            delay: 1000,
            action: [{
                        text: 'I am interested. Let’s get started',
                        value: 'yes',
                        cssClass: 'padforbtn'
                    }
                   ,{
                        text: 'I want to browse through PKSMT standard website',
                        value: 'no',
                        cssClass: 'padforbtn'
                    }]
        }).then(function(res) {
            getStandardMSTFJWebsite(res);
        });
    });

function getStandardMSTFJWebsite(res) {
    if (res.value === 'no') {
        return botui.message
            .bot({
                delay: 1000,
                content: 'We hope to see you soon. Click the link below browse PKMST standard website.'
            }).then(function() {
                return botui.message
                    .bot({
                        delay: 1500,
                        content: '[https://mst4j-getting-started.mybluemix.net/#/home](https://mst4j-getting-started.mybluemix.net/#/home)^'
                    });
            });
    } else {
        continueWithBotUIWebsite(res);
    }
}

function continueWithBotUIWebsite(res) {
    return botui.message
        .bot({
            delay: 1500,
            content: 'We are excited to take you through the webpage. Here are some interesting choices for you!'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: [{
                            text: 'Take me through tutorials',
                            value: 'gototutorials',
                            cssClass: 'padforbtn'
                        }
                        ,{
                            text: 'Create my first Service',
                            value: 'CORETEMPLATES',
                            cssClass: 'padforbtn'
                        }
                    ]
                }).then(function(res) {
                    checkTheFlow_Tutorials_CoreTemplates(res);
                });
        });
}

function checkTheFlow_Tutorials_CoreTemplates(res) {
    if (res.value === 'gototutorials') {
        gotoTutorials();
    } else {
        gotoCoreTemplates();
    }
}

function gotoTutorials() {
    return botui.message
        .bot({
            delay: 1000,
            content: 'Great choice. Here’s what we got to show you for tutorial.'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: actionBtns1
                }).then(function(res) {
                    checkTheFlow_actionBtns1(res);
                });
        });
}
function checkTheFlow_actionBtns_Login(res) {
    switch (res.value) {
        case 'GOOGLE_LOGIN':
            getGITHUB_LOGIN();//getGOOGLE_LOGIN();
            break;
        case 'FACEBOOK_LOGIN':
            getGITHUB_LOGIN();//getFACEBOOK_LOGIN();
            break;
        case 'GITHUB_LOGIN':
            getGITHUB_LOGIN();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        default:
            break;
    }
}
function checkTheFlow_actionBtns_TemplateTypes(res, data){
    switch (res.value) {
        case 'SERVERLESS_TEMPLATE':
            createMicroServiceTemplate('serverless',data);//getSERVERLESS_TEMPLATE(data);
            break;
        case 'PKMST_TEMPLATE':
            createMicroServiceTemplate('pkmst',data);//getPKMST_TEMPLATE(data);
            break;
        case 'DROP_WIZARD_TEMPLATE':
            createMicroServiceTemplate('dropwizard',data);//getDROP_WIZARD_TEMPLATE(data);
            break;
        case 'SHOW_TASKS':
            gotoShowTaks();
            break;
        default:
            break;
    }
}
function gotoShowTaks(){
    botui.message
        .bot({
            delay: 1000,
            content: 'We appreciate your interest to check out current tasks. Here is what we got to show you for tasks.'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: actionBtns_Tasks
                }).then(function(res) {
                    checkTheFlow_actionBtns_Tasks(res);
                });
        });
}
function checkTheFlow_actionBtns_Tasks(){
    switch (res.value) {
        case 'ALL_TASKS':
            getALL_TASKS(data);
            break;
        case 'TASK_BY_USER_ID':
            getTaksbyuserID(data);
            break;
        case 'MY_TASKS':
            getMytask(data);
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        case 'LOGOUT':
            getLogout();
            break;
        default:
            break;
    }
}
function getALL_TASKS(){

}
function getTaksbyuserID(){

}
function getMytask(){

}
function getLogout(){

}
function getGITHUB_LOGIN(){
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET', GETAPI);
    // xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function() {
        var res = JSON.parse(xhr.responseText);
        window.open(res.url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=350,width=600,height=500");
        getAllTemplates(res);//createMicroServiceTemplate(res.uid);
    }
    xhr.send();
}
function getAllTemplates(data){
    botui.message
        .bot({
            delay: 1000,
            content: 'Welcome '+data.uid+'!. you are few steps away from creating your repo. Choose the type of template for your repo.'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: actionBtns_Templates
                }).then(function(res) {
                    checkTheFlow_actionBtns_TemplateTypes(res,data);
                });
        });
}
function gotoCoreTemplates() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Great choice. Before we begin, Let us get to know you. Please login using one of the accounts below.'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: actionBtns_Login
                }).then(function(res) {
                    checkTheFlow_actionBtns_Login(res);
                });
        });
}

function checkTheFlow_actionBtns1(res) {
    switch (res.value) {
        case 'MSTFJ_BASICS':
            getMSTFJ_BASICS();
            break;
        case 'MSTFJ_SETUP':
            getMSTFJ_SETUP();
            break;
        case 'CICD':
            getCICD();
            break;
        case 'MSTFJ_ECOSYSTEM':
            getMSTFJ_ECOSYSTEM();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        case 'CLOUD_SUPPORT':
            getCLOUD_SUPPORT();
            break;
        case 'TEST_AND_QA':
            getTEST_AND_QA();
            break;
        case 'REPO_EXAMPLES':
            getREPO_EXAMPLES();
            break;
        default:
            break;
    }
}
function getREPO_EXAMPLES(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Here are some Repo examples.'
        }).then(function() {
        return botui.message
            .bot({
                delay: 1000,
                content: 'Click the link below to browse some repo examples.'
            }).then(function() {
                botui.message
                    .bot({
                        delay: 1000,
                        content: '[https://github.com/ProKarma-Inc/pkmst-getting-started-examples](https://github.com/ProKarma-Inc/pkmst-getting-started-examples)^'
                    }).then(function(){
                         botui.action
                            .button({
                                delay: 1000,
                                action: actionBtns_RepoEx
                            }).then(function(res) {
                                checkTheFlow_For_CICDs(res);
                            });                    
                    });
            });
        });
}
function getTEST_AND_QA(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Here is what we have for Test & QA.'
        }).then(function() {
            return botui.action
                .button({
                    delay: 1000,
                    action: actionBtns_TQA
                }).then(function(res) {
                    checkTheFlow_For_Test_QA(res);
                });
        });
}
function getCLOUD_SUPPORT(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Here is what we have for Cloud Support.'
        }).then(function() {
            return botui.action
                .button({
                    delay: 1000,
                    action: actionBtns_CloudSupport
                }).then(function(res) {
                    checkTheFlow_For_CloudSupport(res);
                });
        });
}
function getCICD(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Here is what we have for CICD.'
        }).then(function() {
            return botui.action
                .button({
                    delay: 1000,
                    action: actionBtns6
                }).then(function(res) {
                    checkTheFlow_For_CICDs(res);
                });
        });
}
function getMSTFJ_BASICS(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Thats a great start.Here is what we have for MSTFJ Basics.'
        }).then(function() {
            return botui.action
                .button({
                    delay: 1000,
                    action: actionBtns2
                }).then(function(res) {
                    checkTheFlow_actionBtns2(res);
                });
        });
}
function getMSTFJ_SETUP() {
    return botui.message
        .bot({
            delay: 1000,
            content: 'We hope you have checked out tutorials on MSTFJ Basics. Here’s what we have for MSTFJ environment setup.'
        }).then(function() {
            return botui.action
                .button({ // let user do something
                    delay: 1000,
                    action: actionBtns4
                }).then(function(res) {
                    checkTheFlow_actionBtns4(res);
                });
        });
}
function getMSTFJ_ECOSYSTEM() {
    botui.message
        .bot({
            delay: 1000,
            content: 'We hope you have checked out tutorials on MSTFJ Basics and environment setup. Here’s what we have for MSTFJ ecosystem.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem.jpg'
                });
            botui.action
                .button({
                    delay: 1000,
                    action: actionBtns5
                }).then(function(res) {
                    checkTheFlow_actionBtns5(res);
                });
            });
}

function getCODE_GENERATOR() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about Code Generator.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator1.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator2.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator3.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator4.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator5.jpg'
                }).then(function() {

                    displayActions();
                });
        });
}
function displayActions_For_TestQA(){
        return botui.action
            .button({
                delay:1000,
                action:continueActions_TQA
            }).then(function(res){
                    checkTheFlow_For_Test_QAInside(res);
                });
}
function displayActions_For_CloudSupport(){
        return botui.action
            .button({
                delay:1000,
                action:continueActions_CloudSupport
            }).then(function(res){
                    checkTheFlow_For_CloudSupportInside(res);
                });
}
function displayActions_For_CICD(){
        return botui.action
            .button({
                delay:1000,
                action:actionBtns6_CICD
            }).then(function(res){
                    checkTheFlow_For_CICD(res);
                });
}
function displayActionsForMSTFJECOSYS(){
        return botui.action
            .button({
                delay:1000,
                action:actionBtns_MSTFJ_ECOSYS
            }).then(function(res){
                    checkTheFlow_For_MSTFJ_ECOSYS(res);
                });
}
function displayActions_For_MSTFJBasics(){
        return botui.action
            .button({
                delay:1000,
                action:actionBtns_MSTFJ_BASICS
            }).then(function(res){
                    checkTheFlow_For_MSTFJBasics(res);
                });
}
function checkTheFlow_For_Test_QA(res){
    switch (res.value) {
        case 'TEST_SUPPORT_MSFTFJ':
            getTEST_SUPPORT_MSFTFJ();
            break;
        case 'TEST_EXE':
            getTEST_EXE();
            break;
        case 'CDC':
            getCDC();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;            
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_CloudSupport(res){
    switch (res.value) {
        case 'APP_DYNAMICS':
            getAPP_DYNAMICS();
            break;
        case 'CF_PCF':
            gotoCF_PCF();
            break;
        case 'CF_BLUEMIX':
            gotoCF_BLUEMIX();
            break;
        case 'AWS':
            gotoAWS();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;            
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_Test_QAInside(res){
    switch (res.value) {
        case 'CONTINUE_TESTQA':
            getTEST_AND_QA();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_CloudSupportInside(res){
    switch (res.value) {
        case 'CONTINUE_CLOUDSUPPORT':
            getCLOUD_SUPPORT();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_MSTFJ_ENV(res){
    switch (res.value) {
        case 'CONTINUE_MSTFJENV_SETUP':
            getMSTFJ_SETUP();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_CICDs(res){
    switch (res.value) {
        case 'SETUP_JENKINSJOB':
            getSETUP_JENKINSJOB();
            break;
        case 'DOCKER_IMAGE':
            getDOCKER_IMAGE();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }    
}
function checkTheFlow_For_CICD(res){
    switch (res.value) {
        case 'CONTINUE_CICD':
            getCICD();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_MSTFJBasics(res){
    switch (res.value) {
        case 'CONTINUE_MSTFJBASICS':
            getMSTFJ_BASICS();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_For_MSTFJ_ECOSYS(res){
    switch (res.value) {
        case 'CONTINUE_MSTFJ_ECOSYS':
            getMSTFJ_ECOSYSTEM();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function getCORETEMPLATES() {
    gotoCoreTemplates();

}

function checkTheFlow_actionBtns2(res) {
    switch (res.value) {
        case 'OVERVIEW':
            getOVERVIEW();
            break;
        case 'MSTFJ_SLIDES':
            getMSTFJ_SLIDES();
            break;
        case 'MSTFJ_SCREENSHOTS':
            getMSTFJ_SCREENSHOTS();
            break;
        case 'VIDEO_TUTORIAL':
            getVIDEO_TUTORIAL();
            break;
        case 'LIVE_DASHBOARD':
            getLIVE_DASHBOARD();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        default:
            break;
    }
}
function checkTheFlow_actionBtns4(res) {
    switch (res.value) {
        case 'PREREQUISITES':
            getPrerequisite_Info();
            break;
        case 'INSTALL_ARCHTYPE':
            getInstall_Archtype();
            break;
        case 'GENERATE_PROJECT':
            getCode_GeneratorInfo();
            break;
        case 'IMPORT_CODE':
            getImport_Code();
            break;
        case 'CONFIG_PROJECT':
            getConfig_Code();
            break;
        case 'RUN_PROJECT':
            getRun_Project();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        case 'SETUPENV_DOCKER':
            getSETUPENV_DOCKER();
            break;
        case 'CODE_GENERATOR':
            getCODE_GENERATOR();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;            
        default:
            break;
    }
}
function checkTheFlow_actionBtns5(res) {
    switch (res.value) {
        case 'GATEWAY':
            getGATEWAY();
            break;
        case 'AUTH_SERVICE':
            getAUTH_SERVICE();
            break;
        case 'REGISTRY_SERVER':
            getREGISTRY_SERVER();
            break;
        case 'DIAGNOSTIC_SERVER':
            getDIAGNOSTIC_SERVER();
            break;
        case 'MICROSERVICE_DASHBOARD':
            getMICROSERVICE_DASHBOARD();
            break;
        case 'ELK_LOG_MGMT':
            getELK_LOG_MGMT();
            break;
        case 'CORETEMPLATES':
            getCORETEMPLATES();
            break;
        case 'SPLUNK_LOG_MGMT':
            getSPLUNK_LOG_MGMT();
            break;
        case 'CONTINUE_TUTORIALS':
            gotoTutorials();
            break;
        default:
            break;
    }
}
function getTEST_SUPPORT_MSFTFJ(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Test & QA - Test Support'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/tqa1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/tqa2.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/tqa3.jpg'
                }).then(function() {
                    displayActions_For_TestQA();
                });
        });
}
function getCDC(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-CDC'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cdc1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cdc2.jpg'
                }).then(function() {
                    displayActions_For_TestQA();
                });
        });
}
function getTEST_EXE(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-Test Execution'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe2.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe3.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe4.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe5.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/texe6.jpg'
                }).then(function() {
                    displayActions_For_TestQA();
                });
        });
}
function getAPP_DYNAMICS(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-App Dynamics'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport2.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport3.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport4.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport5.jpg'
                }).then(function() {
                    displayActions_For_CloudSupport();
                });
        });
}
function gotoCF_PCF(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-Cloud Foundry PCF'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport_pcf.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport_pcf2.JPG'
                }).then(function() {
                    displayActions_For_CloudSupport();
                });
        });
}
function gotoCF_BLUEMIX(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-Cloud Foundry Bluemix'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport_pcf3.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport_pcf4.JPG'
                }).then(function() {
                    displayActions_For_CloudSupport();
                });
        });
}
function gotoAWS(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for Cloud Support-AWS'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/cloudsupport_aws.JPG'
                }).then(function() {
                    displayActions_For_CloudSupport();
                });
        });
}
function getSETUP_JENKINSJOB(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for CICD-Docker Image.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupjenkins1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupjenkins2.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupjenkins3.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupjenkins4.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupjenkins5.jpg'
                }).then(function() {
                    displayActions_For_CICD();
                });
        });
}
function getDOCKER_IMAGE(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for CICD-Docker Image.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/dockerimage1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/dockerimage2.jpg'
                }).then(function() {
                    displayActions_For_CICD();
                });
        });
}
function getGATEWAY(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Gateway.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem2.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getAUTH_SERVICE(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Authentication Service.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem3.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getREGISTRY_SERVER(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Registry Server.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem4.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getDIAGNOSTIC_SERVER(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Gateway.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem2.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getMICROSERVICE_DASHBOARD(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Microservice Dashboard.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem5.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getELK_LOG_MGMT(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Log Management with ELK stack (Elastic search,Logstash,Kibana).'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem6.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getSPLUNK_LOG_MGMT(){
        botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we have for MSTFJ ecosystem-Log Management Splunk configuration.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/mstfjecosystem7.jpg'
                }).then(function() {
                    displayActionsForMSTFJECOSYS();
                });
        });
}
function getOVERVIEW(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about MSTFJ Overview.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/overview.jpg'
                }).then(function() {
                    displayActions_For_MSTFJBasics();
                });
        });
}
function getPrerequisite_Info() {
    return botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about Prerequisites.'
        }).then(function() {
            return botui.message
                .bot({
                    delay: 1000,
                    content: 'Before installing MSTFJ you need to make sure to have the following in your system(Windows):'
                }).then(function() {
                    return botui.message
                        .bot({
                            delay: 200,
                            content: '1.Maven version 3.3.0 or higher.'
                        }).then(function() {
                            return botui.message
                                .bot({
                                    delay: 200,
                                    content: '2.Java version JDK 8.0 or higher.'
                                }).then(function() {
                                    displayActionsForMSTFJEnv();
                                });
                        });
                });
        });
}
function getSETUPENV_DOCKER(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here is how we can setup environment via Docker.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupdocker1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupdocker2.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupdocker3.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/setupdocker4.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });
}
function getCODE_GENERATOR(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here is what we got for Code Generator.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator1.JPG'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator2.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator3.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/codegenerator4.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });
}
function displayActionsForMSTFJEnv(){
        return botui.action
            .button({
                delay:1000,
                action:actionBtns_MSTFJ_ENV
            }).then(function(res){
                    checkTheFlow_For_MSTFJ_ENV(res);
                });
}
function getMSTFJ_SLIDES(){
        botui.message
            .bot({
                delay: 1000,
                content: 'Here is link to the MSTFJ Slides'
            }).then(function() {
                return botui.message
                    .bot({
                        delay: 1500,
                        content: '[https://mtj-demo.mybluemix.net/demo#/](https://mtj-demo.mybluemix.net/demo#/)^'
                    }).then(function(){
                            return botui.action
                                .button({
                                    delay: 1000,
                                    action: actionBtns_MSTFJ_BASICS
                                }).then(function(res) {
                                    checkTheFlow_For_MSTFJBasics(res);
                                });
                    });
            });
}
function getMSTFJ_SCREENSHOTS(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about MSTFJ Screenshots.'
        }).then(function() {
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide1.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide2.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide3.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide4.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide5.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide6.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide7.jpg'
                });
            botui.message
                .add({
                    type: 'embed',
                    content: 'Images/slide8.jpg'
                }).then(function() {
                    displayActions_For_MSTFJBasics();
                });
        });
}
function getVIDEO_TUTORIAL(){
    botui.message
        .bot({
            delay:200,
            content:'Here’s what we got about MSTFJ Video Tutorials.'
        }).then(function(){
                return botui.message
                    .add({
                        delay: 1000,
                        loading: true,
                        type: 'embed',
                        content: 'https://www.youtube.com/embed/hDCdWai8dr0'
                    }).then(function() {
                        botui.message
                            .bot({
                                delay: 200,
                                content: 'Here is one more Video about MSTFJ'
                            }).then(function() {
                                return botui.message
                                    .add({
                                        delay: 1000,
                                        loading: true,
                                        type: 'embed',
                                        content: 'https://www.youtube.com/embed/HfpgHvEg6JQ'
                                    }).then(function() {
                                        return botui.message
                                            .add({
                                                delay: 1000,
                                                loading: true,
                                                type: 'embed',
                                                content: 'https://www.youtube.com/embed/SFkYVWBMNTA'
                                            }).then(function(){
                                                    return botui.message
                                                    .add({
                                                        delay: 1000,
                                                        loading: true,
                                                        type: 'embed',
                                                        content: 'https://www.youtube.com/embed/VsJuWBGPreE'
                                                    }).then(function(){
                                                        return botui.message
                                                                .add({
                                                                    delay: 1000,
                                                                    loading: true,
                                                                    type: 'embed',
                                                                    content: 'https://www.youtube.com/embed/N_RZktXo8Us'
                                                                }).then(function(){
                                                                    return botui.message
                                                                    .add({
                                                                        delay: 1000,
                                                                        loading: true,
                                                                        type: 'embed',
                                                                        content: 'https://www.youtube.com/embed/UjV_PvjdyUU'
                                                                    }).then(function(){
                                                                            displayActions_For_MSTFJBasics();
                                                                        });

                                                                    });
                                                        
                                                        
                                                        });
                                                });
                                    });
                            });
                    });
            });
}
function getLIVE_DASHBOARD(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about MSTFJ Overview.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/livedashboard.jpg'
                }).then(function() {
                    displayActions_For_MSTFJBasics();
                });
        });
}

function displayActions() {
    return botui.action
        .button({ // let user do something
            delay: 1000,
            action: actionBtns3
        }).then(function(res) {
            checkTheFlow_actionBtns3(res);
        });
}

function getInstall_Archtype() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about Install Archtype.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/installingmstfj.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });
}

function getCode_GeneratorInfo() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about generating a microservice project.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/generate_microservice_project.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });
}

function getImport_Code() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about importing microservice project.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/import_project.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });
}

function getConfig_Code() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about configuring microservice project.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/config_project.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });

}

function getRun_Project() {
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about running microservice project.'
        }).then(function() {
            return botui.message
                .add({
                    type: 'embed',
                    content: 'Images/run_project.jpg'
                }).then(function() {
                    displayActionsForMSTFJEnv();
                });
        });

}

function checkTheFlow_actionBtns3(res) {
    if (res.value === 'CONTINUE_MSTFJBASICS') {
        botui.message
            .bot({
                delay: 1000,
                content: 'We appreciate your interest to learn more about MSTFJ environment setup.'
            }).then(function() {
                getMSTFJ_SETUP();
            });
    } else if(res.value === 'CONTINUE_TUTORIALS') {
        botui.message
            .bot({
                delay: 1000,
                content: 'Great choice. Here’s what we got to show you for tutorial'
            }).then(function() {
                getCORETEMPLATES();
            });
    } else {
        botui.message
            .bot({
                delay: 1000,
                content: 'Congratulations. You are now ready to access your repo.'
            }).then(function() {
                getCORETEMPLATES();
            });    
    }
}

function createMicroServiceTemplate(type, data) {
    botui.message
        .bot({
            delay: 1000,
            content: 'Enter the repo name to see it(microservice) is actually created for you:'
        })
        .then(function() {
            return botui.action.text({
                delay: 1000,
                action: {
                    value: 'github/example-repo',
                    placeholder: 'github/example-repo'
                }
            })
        }).then(function(res) {
            loadingMsgIndex = botui.message.bot({
                delay: 200,
                loading: true
            }).then(function(index) {
                loadingMsgIndex = index;
                if(type=="serverless"){
                    var serverlessPayload = getServelessTemplateRepoPayload(res.value, data);
                    sendXHR(serverlessPayload, showStatus);
                }else if(type=="pkmst"){
                    var pkmstPayload = getPKMSTTemplateRepoPayload(res.value, data);
                    sendXHR(pkmstPayload, showStatus);
                }
                else if(type=="dropwizard"){
                    var dropwizardPayload = getDropWizardTemplateRepoPayload(res.value, data);
                    sendXHR(dropwizardPayload, showStatus);
                }
                else{
                    var unknownPayload = getServelessTemplateRepoPayload(res.value, data);
                    sendXHR(unknownPayload, showStatus);
                }
                sendXHR(res.value, showStatus, data)
            });
        });
}

function showStatus(message) {
    botui.message
        .update(loadingMsgIndex, {
            content: message
        })
        .then(createMicroServiceTemplate); // ask again for repo. Keep in loop.
}

function sendXHR(payloadtype, cb) {
    var payloadJson = JSON.stringify(payloadtype);
    var xhr = new XMLHttpRequest();

    var self = this;
    xhr.open('POST', API);
    // xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function() {
        console.info("Posted data to samvad service..");
        //var res = JSON.parse(xhr.responseText)
        cb(xhr.responseText);
    }
    console.info("Sending data to service...");
    xhr.send(payloadJson);
}
function getPKMSTTemplateRepoPayload(repoName, data){
    var payLoad = {
        "serviceId":data.uuid,
        "domain": "prokarma",
        "runtime": "java",
        "serviceName": repoName,
        "serviceType": "pkmst",
        "client": data.uid
    };
    return payLoad;
}
function getServelessTemplateRepoPayload(repoName, data){
    var payLoad = {
        "serviceId":data.uuid,
        "domain": "prokarma",
        "runtime": "java",
        "serviceName": repoName,
        "serviceType": "serverless",
        "client": data.uid
    };
    return payLoad;
}
function getDropWizardTemplateRepoPayload(repoName, data){
    var payLoad = {
        "serviceId":data.uuid,
        "domain": "prokarma",
        "runtime": "java",
        "serviceName": repoName,
        "serviceType": "dropwizard",
        "client": data.uid
    };
    return payLoad;
}
