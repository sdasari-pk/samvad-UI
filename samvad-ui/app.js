var botui = new BotUI('samvad-ui');
var actionBtns1 = [
                      {
                        text: 'MSTFJ Basics',
                        value: 'MSTFJ_INFO',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'MSTFJ environment setup',
                        value: 'MSTFJ_SETUP',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Code Generator',
                        value: 'CODE_GENERATOR',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'MSTFJ ecosystem',
                        value: 'MSTFJ_ECOSYSTEM',
                        cssClass: 'padforbtn'
                      }, 
                      {
                        text: 'Create my first Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                      }   
                    ];
var actionBtns2 = [
                      {
                        text: 'Prerequisites',
                        value: 'PREREQUISITES',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Install Archtype',
                        value: 'INSTALL_ARCHTYPE',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Generate Microservice Project',
                        value: 'GENERATE_PROJECT',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Import code in IDE',
                        value: 'IMPORT_CODE',
                        cssClass: 'padforbtn'
                      }, 
                      {
                        text: 'Config your project',
                        value: 'CONFIG_PROJECT',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Run your project',
                        value: 'RUN_PROJECT',
                        cssClass: 'padforbtn'
                      }, 
                      {
                        text: 'Create my first Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                      }
                    ];
var actionBtns3 = [
                      {
                        text: 'Continue with MSTFJ environment setup.',
                        value: 'MSTFJ_SETUP',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'Create my first Repo',
                        value: 'CORETEMPLATES',
                        cssClass: 'padforbtn'
                      }
                    ];
var loadingMsgIndex,

    API = 'https://api.github.com/repos/';


 botui.message
    .bot('Hello! Welcome to Prokarma interactive web. Get ready to experience a whole new way of web interaction!')
    .then(function () { // wait till previous message has been shown.
         return botui.action.button({ // let user do something
                    delay: 1000,
                    action: [
                      {
                        text: 'I am interested. Let’s get started',
                        value: 'yes',
                        cssClass: 'padforbtn'
                      },
                      {
                        text: 'I want to browse through PKSMT standard website',
                        value: 'no',
                        cssClass: 'padforbtn'
                      }
                    ]
                  }).then(function (res) {
                        getStandardMSTFJWebsite(res);
                    });
 });
function getStandardMSTFJWebsite(res){
  if(res.value==='no'){
        return botui.message
            .bot({
                delay: 1000,
                content: 'We hope to see you soon. Click the link below browse PKMST standard website.'
            }).then(function(){
                return botui.message
                   .bot({
                    delay:1500,
                    content:'[https://mst4j-getting-started.mybluemix.net/#/home](https://mst4j-getting-started.mybluemix.net/#/home)^'  
                   });
          });
    } else {
        continueWithBotUIWebsite(res);      
    }
}
function continueWithBotUIWebsite(res){
    return botui.message
        .bot({
            delay: 1500,
            content: 'We are excited to take you through the webpage. Here are some interesting choices for you!'
        }).then(function(){
            return botui.action
                .button({ // let user do something
                        delay: 1000,
                        action: [
                          {
                            text: 'Take me through tutorials',
                            value: 'gototutorials',
                            cssClass: 'padforbtn'
                          },
                          {
                            text: 'Create my first Repo',
                            value: 'CORETEMPLATES',
                            cssClass: 'padforbtn'
                          }
                        ]
                      }).then(function (res) {
                            checkTheFlow_Tutorials_CoreTemplates(res);
                         });
          });
}
function checkTheFlow_Tutorials_CoreTemplates(res){
    if(res.value==='gototutorials'){
        gotoTutorials();
    } else{
        gotoCoreTemplates();
    }
}
function gotoTutorials(){
    return botui.message
        .bot({
            delay: 1000,
            content: 'Interesting choice. Here’s what we got to show you for tutorial.'
        }).then(function(){
            return botui.action
                .button({ // let user do something
                        delay: 1000,
                        action: actionBtns1
                      }).then(function (res) {
                            checkTheFlow_actionBtns1(res);
                        });
          });
}
function gotoCoreTemplates(){
createMicroServiceTemplate();
}
function checkTheFlow_actionBtns1(res){
    switch(res.value){
            case 'MSTFJ_INFO':
                getMSTFJ_INFO();
                break;
            case 'MSTFJ_SETUP':
                getMSTFJ_SETUP();
                break;
            case 'CODE_GENERATOR':
                getCODE_GENERATOR();
                break;
            case 'MSTFJ_ECOSYSTEM':
                getMSTFJ_ECOSYSTEM();
                break;
            case 'CORETEMPLATES':
                getCORETEMPLATES();
                break;
            default:
                break;
    }
}
function getMSTFJ_INFO(){
 botui.message
    .bot({
        delay: 200,
        content: 'MSTFJ is a Microservice Toolkit For Java, An archetype based toolkit for building Microservices in Java. Click below to MSTFJ Slides'
    }).then(function(){
         return botui.message
            .add({
                delay:1000,
                content:'[https://mst4j-getting-started.mybluemix.net/#/home](https://mst4j-getting-started.mybluemix.net/#/home)^'  
            }).then(function(){
                return botui.message
                        .add({
                         delay:1000,
                         loading: true,
                         type:'embed',
                         content:'https://www.youtube.com/embed/hDCdWai8dr0'
                        }).then(function(){
                            botui.message
                                .bot({
                                    delay: 200,
                                    content: 'Here is one more Video about MSTFJ'
                                }).then(function(){
                                    return botui.message
                                            .add({
                                             delay:1000,
                                             loading: true,
                                             type:'embed',
                                             content:'https://www.youtube.com/embed/HfpgHvEg6JQ'
                                            }).then(function(){
                                                getMSTFJ_SETUP();                                
                                            });

                                    });
                           });
            });
    });
}
function getMSTFJ_SETUP(){
    return botui.message
            .bot({
                delay: 1000,
                content: 'You are few steps away to set up your own MSTFJ environment. Here’s what we have for you to learn about MSTFJ environment setup.'
            }).then(function(){
                return botui.action
                    .button({ // let user do something
                        delay: 1000,
                        action: actionBtns2
                      }).then(function (res) {
                            checkTheFlow_actionBtns2(res);
                        });
              });
}
function getCODE_GENERATOR(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about Code Generator.'
        }).then(function(){
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/codegenerator1.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/codegenerator2.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/codegenerator3.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/codegenerator4.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/codegenerator5.jpg'
                }).then(function(){
             
                    displayActions();
                   });         
    });
}
function getMSTFJ_ECOSYSTEM(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about MSTFJ Ecosystem.'
        }).then(function(){
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem2.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem3.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem4.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem5.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem6.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem7.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem8.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem8.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem9.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem10.jpg'
                });         
             botui.message
                .add({
                 type:'embed',
                 content: 'Images/mstfjecosystem1.jpg'
                }).then(function(){
             
                    displayActions();
                   });         
    });
}
function getCORETEMPLATES(){
    createMicroServiceTemplate();
}
function checkTheFlow_actionBtns2(res){
    switch(res.value){
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
            default:
                break;
    }
}
function getPrerequisite_Info(){
    return botui.message
    .bot({
        delay: 1000,
        content: 'Here’s what we got about Prerequisites.'
    }).then(function(){
        return botui.message
            .bot({
                delay: 1000,
                content: 'Before installing MSTFJ you need to make sure to have the following in your system(Windows):'
             }).then(function(){
                    return botui.message
                        .bot({
                            delay: 200,
                            content: '1.Maven version 3.3.0 or higher.'   
                        }).then(function(){
                                return botui.message
                                    .bot({
                                        delay: 200,
                                        content: '2.Java version JDK 8.0 or higher.'   
                                     }).then(function(){
                                            displayActions();
                                        });
                                });
                });
    });
}
function displayActions(){
    return botui.action
    .button({ // let user do something
        delay: 1000,
        action: actionBtns3
      }).then(function (res) {
            checkTheFlow_actionBtns3(res);
        });
}
function getInstall_Archtype(){
         botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about Install Archtype.'
        }).then(function(){
             return botui.message
                .add({
                 type:'embed',
                 content: 'Images/installingmstfj.jpg'
                }).then(function(){
                    displayActions();
                   });
         });
}
function getCode_GeneratorInfo(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about generating a microservice project.'
        }).then(function(){
             return botui.message
                .add({
                 type:'embed',
                 content: 'Images/generate_microservice_project.jpg'
                }).then(function(){
                    displayActions();
                   });
         });    
}
function getImport_Code(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about importing microservice project.'
        }).then(function(){
             return botui.message
                .add({
                 type:'embed',
                 content: 'Images/import_project.jpg'
                }).then(function(){
                    displayActions();
                   });
         });
}
function getConfig_Code(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about configuring microservice project.'
        }).then(function(){
             return botui.message
                .add({
                 type:'embed',
                 content: 'Images/config_project.jpg'
                }).then(function(){
                    displayActions();
                   });
         });

}
function getRun_Project(){
    botui.message
        .bot({
            delay: 1000,
            content: 'Here’s what we got about running microservice project.'
        }).then(function(){
             return botui.message
                .add({
                 type:'embed',
                 content: 'Images/run_project.jpg'
                }).then(function(){
                    displayActions();
                   });
         });

}
function checkTheFlow_actionBtns3(res){
    if(res.value === 'MSTFJ_SETUP'){
         botui.message
        .bot({
            delay: 1000,
            content: 'We appreciate your interest to learn more about MSTFJ environment setup.'
        }).then(function(){
            getMSTFJ_SETUP();
        });
    } else {
        botui.message
        .bot({
            delay: 1000,
            content: 'We hope the information was satisfying. Have fun playing around with Core templates.'
        }).then(function(){
            getCORETEMPLATES();
        });
    }
}
function createMicroServiceTemplate() {
  botui.message
  .bot({
    delay: 1000,
    content: 'Enter the repo name to see it(microservice) is actually created for you:'
  })
  .then(function () {
    return botui.action.text({
      delay: 1000,
      action: {
        value: 'github/example-repo',
        placeholder: 'github/example-repo'
      }
    })
  }).then(function (res) {
    loadingMsgIndex = botui.message.bot({
      delay: 200,
      loading: true
    }).then(function (index) {
      loadingMsgIndex = index;
      sendXHR(res.value, showStars)
    });
  });
}
function showStars(stars) {
  botui.message
  .update(loadingMsgIndex, {
    content: 'it has !(star) ' + (stars || "0") + ' stars.'
  })
  .then(createMicroServiceTemplate); // ask again for repo. Keep in loop.
}
function sendXHR(repo, cb) {
  var xhr = new XMLHttpRequest();
  var self = this;
  xhr.open('GET', API + repo);
  xhr.onload = function () {
    var res = JSON.parse(xhr.responseText)
    cb(res.stargazers_count);
  }
  xhr.send();
}
