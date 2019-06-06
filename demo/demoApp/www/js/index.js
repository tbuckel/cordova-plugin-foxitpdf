/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

window.preview = function(){
    
    var sn = 'nt4MfRHH+05GEO/9DEJZFuh1shwOhyHfo89Vki8tNbGJSk5cUHnHnQ==';
    var key = 'ezJvjl3GtG539PsXZqXcImmEXhuiodACWf3giDcZ4Qnhp7nnD+Ya2PnVL+yd393PG9ZR8mfhQ3Ux2tdnplM1VSpe2Kms0pk4/0WEGhV9RtjvWd4XO1hUaeeY4DrFXN7uNRyNCl2G6kLGvlv59kMq56qflOI/2688le9VBLwtaQk05dkdrQ65e6yjDN2PQmV5QZcVLfi7vVlRvQnUIB6vtFrY4fCrycXaBG2/3Gw1v7CzvboDTiiheUDT7GqSfAY1Y3ITf2HTw7OC5KU1m7qVWia2V4VQkT/l1JaEAk5Fe6ZZBd3jPGpj7GXcBIXrUdEfJQj1qbEVB5OFO8peNA/s851LhBkcRN25wydMJG4Bsbdzm0Kp8gIL3DKf6W0aI6nsFyUc8EeUpkYY6HN2MoUg/OJsbqotaBI0cx6NZu038s3gEBBhqUGSHO5x7dzDMojU6jRADpfs6fqOFn2kQIk9JCq7fPyBzJBHFsRmh3eJ6JnEzMfjrZQLQ1Hbj+/74EzDqydz1AoPdSZYfXQ4HlGClYCKEpaVgpJhemYQxS43kWECQ4Kwa/99U6IxYWKoQ+Jm/DmABbcc8V086c9rHd5ClDFWk2PQ1BsGWSHFeuwW/sauDu+IPsAEukusIiP7DcN6J9rkmnPW2exgZKVpQlF3sqwIkm9XKxiFwuEdq+9eRI1e8d7C+91cFr9sc0idkkJCloLjUqfNunjeKVKU49Kyhp8kc1fdI06iMrg0kMzorewqnkjwqLEigFAxEOO1LyDXDTTuy4DFPX+ggVaqnmAicA8bqMlndMqWARpED8VOnjTNlNsZXf5xgJiYz1WfcVbIvTqKEITo1zxivuTCpfM+h3Sra0kH0LJmKiTsvnHsPKHDbgswwBZaUByO2cmRxw5bj12ncfLBV41NCalG84ocgck1LhIshHde0n9zp6ufuctCtkfnpM5iP5qTsTZpiyyKQ5YbVNN15DEN50JKh9KZXGXSJoLTdLfRIgalXttN0g+w21m8JegLZl483vl3hm2L7q9HUnJ/gP9MilIbK2JnV49rMte5MH7qBxFmqwOH3RfgARsjsfju8MLDJg3NYAzfUjPyLyJpVX7VvqLe5RO99jVPXnKCRPXzCq4wDwVYEmRSHjc7sgUyS2UOUf/aFNZKG6284yrNCPqaPmUjvtbmEXJyPW5QMUN+mJv2/uBm3FUUqiJcbUeM+fVqM8c7aazA2zw0f43JNBMSgn8RbEbph4L86polwCK8YVamUuWUsw==';
    window.FoxitPdf.initialize(sn,key);



    //iOS
    var filePath = cordova.file.documentsDirectory + '7FormField.pdf';
    window.FoxitPdf.openDocument(filePath, null);

    window.FoxitPdf.addEventListener('onDocWillSave',function(data){
                                     console.log('onDocWillSave callback ',data);
                                     console.log('onDocWillSave callback info',data.info);
                                     //console.log('onDocWillSave callback info error',data.error);

                                     console.log('66666');
                                     // window.FoxitPdf.importFromFDF(cordova.file.documentsDirectory + 'Annot_all_2.fdf',0x0002,[[0,1]]);
                                     window.FoxitPdf.exportToFDF(cordova.file.documentsDirectory +'2.xfdf',0x0002,1,[[0,1]]);
                                     console.log('555555555555555555');
                                     });
    
    window.FoxitPdf.addEventListener('onDocOpened',function(data){
        console.log(Form);

        Form.getAllFormFields().then(function(data){
            console.log(data);
        },function(){
            console.log('error');
        });

        Form.getForm().then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });
        
        Form.updateForm({alignment:0}).then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });

        Form.validateFieldName(0,"text1").then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });

        Form.renameField(0,"Signature_0_0").then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });

        // Form.removeField(0).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        // Form.reset().then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        var exportPath = cordova.file.documentsDirectory +'export.xml';
        Form.exportToXML(exportPath).then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });

        // var importPath = cordova.file.documentsDirectory +'improt.xml';
        // Form.importFromXML(importPath).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        Form.getPageControls(0).then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });

        // Form.removeControl(0,0).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        // Form.addControl(0,"text111",0,{left:100,top:10,right:100,bottom:100}).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        // Form.updateControl(0,0,{exportValue:"test"}).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        Form.getFieldByControl(0).then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });
        
        // var field = {};
        // Field.updateField(0,field).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        // Field.reset(0).then(function(data){
        //     console.log(data);
        // }).catch(function(){
        //     console.log('error');
        // });

        Field.getFieldControls(17).then(function(data){
            console.log(data);
        }).catch(function(){
            console.log('error');
        });
    });
    
    
    //Android
    //if you use the 'cordova-plugin-file' plugin, you can set the filePath like this: 
    //var filePath = cordova.file.externalRootDirectory + 'FoxitSDK/Sample.pdf';
    //otherwise:
    //var filePath = "/storage/emulated/0/Sample.pdf";
    //var password = '';
    //window.FoxitPdf.openDocument(filePath, password);

};
