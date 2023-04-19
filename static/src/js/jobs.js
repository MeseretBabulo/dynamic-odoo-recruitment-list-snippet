/* Copyright 2019 Adgensee - Vincent Garcies
 * License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html). */

 odoo.define('website_job_snippet.html_option', function (require) {
    'use strict';
    
    var core = require('web.core');
    var publicWidget = require('web.public.widget');
    var googleScriptLoaded = $.Deferred();
    
    var _t = core._t;
    
    publicWidget.registry.DynamicJObs = publicWidget.Widget.extend({
        selector: '.dynamic_job',
        disabledInEditableMode: false,
    
        /**
         * @override
         */
        start: function () {
            var self = this;
            var defs = [this._super.apply(this, arguments)];
            console.log("########### SSSSSSSSSSSSSSSSS############")
            console.log("This",this)
            console.log("This",this.el)
            console.log("This",this.el.querySelector('#get_lists'))
        let JobsRow = this.el.querySelector('#get_lists')
        JobsRow.innerHTML = '<div>-----------###################------------</div>';
        if (JobsRow){
            this._rpc({
                route: '/jobs/',
                params:{}
            }).then(data=>{
                let html = ``
                data.forEach(jobs=>{
                    html += `<div class="col-lg-6 mb-5">
                                <div class="d-flex align-items-center">
                                    <div style="border-style: inset; width:450px;">
                                        <h5>
                                            <b style="color:rgb(37, 150, 190)">Job Position: </b> ${jobs.name}
                                        </h5>
                                        <h6 class="mb-0"> <b style="color:rgb(37, 150, 190)">Department:</b> ${jobs.department_id ? jobs.department_id[1] : ''}</h6>
                                        <h6><b style="color:rgb(37, 150, 190)">Job Location:</b>${jobs.address_id ? jobs.address_id[1] : ''}</h6>
                                        <div>
                                            <b style="color:rgb(37, 150, 190)">Number of recruitment:</b> ${jobs.no_of_reqruitment}
                                        </div>
                                        </div>
                                </div>
                            </div>`
                })
                JobsRow.innerHTML = html
            })
        }





    },
});
});
// export default publicWidget.registry.YhCities;



// publicWidget.registry.YhCities = publicWidget.Widget.extend({
//     selector: '.explore-cities',
//     start() {
//     options.registry.snippet_html = options.Class.extend({
//             selector: '.explore-cities',
//             start() {
//                 console.log("########### SSSSSSSSSSSSSSSSS############")


//             },
//         /**
//          * Let user edit HTML
//          */
//         // html_ask: function (previewMode, value) {
//         //     console.log("########### start############")
//         //     var self = this;
//         //     console.log(self)
//         //     var def = utils.prompt({
//         //         'id': 'website_snippet_html_ask',
//         //         "window_title": _t("Edit HTML"),
//         //         "textarea": _t("Edit html"),
//         //         "default": LZString.decompressFromEncodedURIComponent(this.$target.attr('data-snippetHTML')),
//         //     });
//         //     def.then(function (data) {
//         //         console.log(data);
//         //         self.$target.html(data.val);   
//         //         self.$target.attr('data-snippetHTMLOld',self.$target.attr('data-snippetHTML'));
//         //         self.$target.attr('data-snippetHTML',LZString.compressToEncodedURIComponent(data.val));

                
//         //     });
//         //     return def;
//         // },

//         /**
//          * Update HTML
//          */
//         // html_update: function (new_html, $textarea, $dialog) {
//         //     this.$target.html(new_html);
//         // },

//         // onBuilt: function () {
//         //     var self = this;
//         //     this._super();
//         //     this.html_ask('click').guardedCatch(function () {
//         //         self.getParent()._onRemoveClick($.Event( "click" ));
//         //     });
//         // },        

//     });

    // return {
    //     Option: options.registry.html,
    // };
// });



console.log("##### Snippet loading.....####")
odoo.define("website_snippet_html.testSnippet", function(require){
    "use strict";
    // var core = require('web.core');
    // var time = require('web.time');
    // var field_utils = require('web.field_utils');
    // var session = require('web.session');
    // var _t = core._t;
    // var qweb = core.qweb;
    // var config = require('web.config');
    var Widget = require('web.Widget');
    var Dialog = require('web.Dialog');
    // var view_dialogs = require('web.view_dialogs');
    var widget_registry = require("web.widget_registry");
    var rpc = require('web.rpc')
    // let clicked_val = 0
    
    var testSnippet = Widget.extend({
                template: 'ethiopian_calander_widget',
                
                events:{},
            
            start: function() {
             
            },
         
        
            
        });

        widget_registry.add('ethiopian_calander_widget', testSnippet)

  

});



