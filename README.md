session-extended-api
====================

Package that extends the Session API, with toggle() and clear() methods.


## Installation

First, install the session-extended-api package from the command line, like so:

````js
mrt add session-extended-api
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````json
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "session-extended-api": {
      "git": "https://github.com/awatson1978/session-extended-api.git"
    }
  }
}
````

If you have any problems, check that ``session-extended-api`` is listed in the ``.meteor/packages`` file in your application's home directory.  

View the TinyTests results by doing the following:  
````js
cd myapp/packages/session-extended-api
meteor test-packages
````

## API

The Session object will support the following API with this package installed:  

````js
Session.set
Session.setDefault
Session.get
Session.equals
Session.toggle
Session.clear
````


**Session.toggle(key)**
Toggle a variable true/false in the session.

````js
//example
Session.setDefault("widgetIsOpen", false);

Template.myTemplate.events({
  'click #displayWidgetButton':function(){
    Session.toggle("widgetIsOpen");
  }
});
````

**Session.clear(key)**
Toggle a variable true/false in the session.

````js
//example
Session.setDefault("selectedPurchaseItemId", Meteor.user().profile.selectedItemId);

Template.myTemplate.events({
  'click #emptyShoppingCart':function(){
    Session.clear("selectedPurchaseItemId");
  }
});
````


## Licensing

MIT License.  Use as you will.
