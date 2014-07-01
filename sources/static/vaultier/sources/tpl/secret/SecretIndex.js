Ember.TEMPLATES["Secret/SecretIndex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n        <div class=\"vlt-page-toolbar pull-right\">\r\n            <div>\r\n\r\n                ");
  stack1 = (helper = helpers.exp || (depth0 && depth0.exp),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "( card.perms.update || card.perms.delete)", options) : helperMissing.call(depth0, "exp", "( card.perms.update || card.perms.delete)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = helpers['if'].call(depth0, "card.perms.invite", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  stack1 = helpers['if'].call(depth0, "card.perms.create", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n        </div>\r\n\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-sm\" data-toggle=\"dropdown\">\r\n                            <span class=\"glyphicon glyphicon-cog\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu caret-left\">\r\n                            ");
  stack1 = helpers['if'].call(depth0, "card.perms.update", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  stack1 = helpers['if'].call(depth0, "card.perms.update", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </ul>\r\n                    </div>\r\n                ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n                                <li>\r\n                                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "Card.edit", "card.slug", options) : helperMissing.call(depth0, "link-to", "Card.edit", "card.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </li>\r\n\r\n                                <li>\r\n                                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "Card.move", "card.slug", options) : helperMissing.call(depth0, "link-to", "Card.move", "card.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </li>\r\n\r\n                            ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                                        Edit card\r\n                                    ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\r\n                                        Move card to another vault\r\n                                    ");
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n\r\n                                <li>\r\n                                    <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteCard", "card", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >Delete card</a>\r\n                                </li>\r\n                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <div\r\n                            class=\"vlt-button-wrapper\"\r\n                            data-toggle=\"tooltip\"\r\n                            title=\r\n                                    \"\r\n                             Invite new team members to collaborate over this card\r\n                             or  grant access permission to current team members\r\n                             \"\r\n                            data-placement=\"bottom\"\r\n                            >\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "Card.memberIndex", "card", options) : helperMissing.call(depth0, "link-to", "Card.memberIndex", "card", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </div>\r\n                ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("\r\n                            <span class=\"glyphicon glyphicon-user\"></span>\r\n                            Collaborate\r\n                        ");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers['if'].call(depth0, "workspace.hasValidKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <div\r\n                                class=\"vlt-button-wrapper\"\r\n                                data-toggle=\"tooltip\"\r\n                                title=\r\n                                        \"\r\n                                         Create one or more secrets on this card.\r\n                                         Secrets are secured by encryption and accessible only to you and your team.\r\n                                         Secret could be password, note, credit card number or key file\r\n                                         \"\r\n                                data-placement=\"bottom\"\r\n                                >\r\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Secret.createSelect", options) : helperMissing.call(depth0, "link-to", "Secret.createSelect", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n                    ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("\r\n                                <span class=\"glyphicon glyphicon-plus\"></span>\r\n                                Create new secret\r\n                            ");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("\r\n                <div class=\"alert alert-danger top-15\">\r\n                    <b>Workspace key error. <br/></b>\r\n                    Your workspace key cannot be decoded. It means you have no access to workspace secret data\r\n                </div>\r\n            ");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                ");
  stack1 = helpers['if'].call(depth0, "length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(28, program28, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        ");
  stack1 = helpers['if'].call(depth0, "isNote", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                        ");
  stack1 = helpers['if'].call(depth0, "isPassword", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                        ");
  stack1 = helpers['if'].call(depth0, "isFile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Vaultier.SecretIndexItemNoteView", {hash:{
    'class': ("vlt-secret vlt-note")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Vaultier.SecretIndexItemPasswordView", {hash:{
    'class': ("vlt-secret vlt-password")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Vaultier.SecretIndexItemFileView", {hash:{
    'class': ("vlt-secret vlt-file")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                    <div class=\"jumbotron vlt-bigbox vlt-secret col-md-8 col-md-offset-2\">\r\n                        <div class=\"vlt-header\">\r\n                            <div class=\"vlt-icon\">\r\n\r\n                            </div>\r\n                            <div class=\"vlt-title\">\r\n                                <h1>You do not have any secret yet</h1>\r\n                            </div>\r\n                        </div>\r\n\r\n                        ");
  stack1 = helpers['if'].call(depth0, "card.perms.create", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                ");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n                            <p>\r\n                                This card is empty.\r\n                                Please create one or more secrets on this card.\r\n                                Secret are secured by encryption and accessible only to you and your team.\r\n                                Secret could be password, note, credit card number or key file\r\n                            </p>\r\n\r\n                            <p class=\"top-30\">\r\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-lg btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Secret.createSelect", options) : helperMissing.call(depth0, "link-to", "Secret.createSelect", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </p>\r\n\r\n                        ");
  return buffer;
  }
function program30(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <span class=\"glyphicon glyphicon-plus\"></span>\r\n                                    Create new secret\r\n                                ");
  }

function program32(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n                <div class=\"jumbotron vlt-bigbox vlt-secret col-md-8 col-md-offset-2\">\r\n                    <div class=\"vlt-header\">\r\n                        <div class=\"vlt-icon\">\r\n\r\n                        </div>\r\n                        <div class=\"vlt-title\">\r\n                            <h1>Secrets are hidden</h1>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <p>\r\n                        <b>Workspace key has not been transfered to you yet.</b>\r\n                        Secrets will be accessible once you receive workspace key.\r\n                        Key will be transfered to you automatically\r\n                        once some workspace team member will go online.\r\n                    </p>\r\n\r\n                </div>\r\n            ");
  }

  data.buffer.push("<div class=\"vlt-page-nav\">\r\n\r\n    ");
  stack1 = (helper = helpers.exp || (depth0 && depth0.exp),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "( workspace.perms.invite || card.perms.create || card.perms.update || card.perms.delete)", options) : helperMissing.call(depth0, "exp", "( workspace.perms.invite || card.perms.create || card.perms.update || card.perms.delete)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    <div class=\"pull-left\">\r\n        <h2>Secrets on card \"");
  stack1 = helpers._triageMustache.call(depth0, "card.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</h2>\r\n    </div>\r\n\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n        <div class=\"vlt-card-detail\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "workspace.keyError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "workspace.hasValidKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(32, program32, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n");
  return buffer;
  
});