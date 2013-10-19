Ember.TEMPLATES["Secret/SecretCreate"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                            <a>\r\n                                Choose secret you want to create\r\n                                <span class=\"glyphicon glyphicon glyphicon-chevron-right\"></span>\r\n                            </a>\r\n                        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                            <a>\r\n                                Fillout data\r\n                                <span class=\"glyphicon glyphicon glyphicon-chevron-right\"></span>\r\n                            </a>\r\n                        ");
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\r\n                        <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Submit</a>\r\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n        <div class=\"modal-dialog vlt-tabs-modal vlt-login\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h2>Create new secret wizard</h2>\r\n\r\n                    <ul class=\"nav nav-pills nav-justified vlt-wizard-steps\">\r\n                        ");
  hashContexts = {'tab': depth0};
  hashTypes = {'tab': "STRING"};
  stack1 = helpers.view.call(depth0, "view.TabView", {hash:{
    'tab': ("select")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                        ");
  hashContexts = {'tab': depth0};
  hashTypes = {'tab': "STRING"};
  stack1 = helpers.view.call(depth0, "view.TabView", {hash:{
    'tab': ("submit")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "tab", options) : helperMissing.call(depth0, "outlet", "tab", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <a href=\"javascript:history.go(-1)\" class=\"btn btn-default btn-sm\">Back</a>\r\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "submitButtonHidden", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
  return buffer;
  
});
