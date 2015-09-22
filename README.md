# gground - graph and statistics tool


## Setup

Download `gground.js` to the node directory, make sure the Sequelize and Promise libraries are installed

```
npm install --save sequelize
npm install promise
```

http://sequelize.readthedocs.org/en/1.7.0/articles/getting-started/
https://www.npmjs.com/package/promise

You will also need a database, any database supported by the Sequelize should do.

The database configuration should be in the same directory `ggroundSetup.js` with following contents:

```
module.exports = {
  db : "mydatabasename here",
  username : "username here",
  password : "password here",
  setup : {
     host : "localhost",
     dialect : "mysql",
     logging: true
  }
 };
```

Then require the gground, which will load the setup:

```javascript

var gground = require("./gground.js");
var graph = gground.gg();

graph.relation( "users/matti/harjoittelija", 
               "measurements/km", {
                      value : 5.3
                }, "actions/treeni/walking")
.then( function() {
   graph.sumsOf("users/matti/harjoittelija",
      "measurements/km",{},"actions/treeni/walking").then(
            function(sum) {
                 console.log("total walking distance is ",sum);
            });
});


```

## Creating a semantic realationship

The relationship has four parts:

1. User name and type and the role in which the user currently is, for example `"user/john/trainer`.
2. Semantics for the relationship, for example `"measurement/meters"`
3. Values to be inserted, start end end time optional
4. Target node name, type and role of traget node, for example `"actions/training/walking"`

```javascript

graph.relation( "user/john/trainer", 
                "measurements/meters", {
                      value : 2500
                }, "actions/training/walking")
.then( function() {
   // The user john has now recorded 2500 meters of walking
});

```

## Calculating sum of the semantic relationship


```javascript

graph.sumsOf( "user/john/trainer", 
                "measurements/meters", {
                }, "actions/training/walking")
.then( function(sum) {
    console.log("The total walking sum is ", sum, " meters ");
});

```


















   

 


   
#### Class gg


- [_createClassType](README.md#gg__createClassType)
- [_sumTest](README.md#gg__sumTest)
- [createClass](README.md#gg_createClass)
- [createNode](README.md#gg_createNode)
- [createRole](README.md#gg_createRole)
- [createTag](README.md#gg_createTag)
- [createUser](README.md#gg_createUser)
- [nodeInRole](README.md#gg_nodeInRole)
- [relation](README.md#gg_relation)
- [sumsOf](README.md#gg_sumsOf)
- [time](README.md#gg_time)
- [userid](README.md#gg_userid)
- [userInRole](README.md#gg_userInRole)



   
    
    
    
    
    
    
    
    


   
      
            
#### Class edge





   


   



      
    
      
            
#### Class dataClass


- [getRole](README.md#dataClass_getRole)
- [id](README.md#dataClass_id)
- [setRole](README.md#dataClass_setRole)



   


   



      
    
      
            
#### Class dataTag





   


   



      
    
      
            
#### Class dataNode


- [getRoleId](README.md#dataNode_getRoleId)
- [id](README.md#dataNode_id)
- [setRoleId](README.md#dataNode_setRoleId)



   


   



      
    





   
# Class gg


The class has following internal singleton variables:
        
* Promise
        
        
### <a name="gg__createClassType"></a>gg::_createClassType(className, name)


```javascript
var me = this;
return new Promise(
    function(resolve) {
        var pid = 0;
        me._dbNode.findOrCreate({
                classname: className,
                name : name
            }).then( function(obj, created) {
                if(obj.options.isNewRecord) {
                    obj.updateAttributes({
                        created: me.time(),
                        updated: me.time(),
                        creator : me.userid(),
                        updater : me.userid(),
                        parentid : pid                
                        }).then( function() {
                            resolve( dataClass(obj, me) ); 
                        })
                } else {
                    resolve( dataClass(obj, me) );
                }
            });        
    });

```

### <a name="gg__sumTest"></a>gg::_sumTest(t)


```javascript

// This is how easy it is to create a sum of some values...
this._dbRelation.sum('double_value', { where: { semantic_id: 9 } }).then(function(sum) {
  console.log("The sum was ", sum);
});

```

### <a name="gg_createClass"></a>gg::createClass(name, underParentNode)


```javascript
return this._createClassType('/model/classes', name);
```

### <a name="gg_createNode"></a>gg::createNode(name, Options)


```javascript
return this._createClassType('/model/nodes', name);
```

### <a name="gg_createRole"></a>gg::createRole(name)


```javascript
return this._createClassType('/model/roles', name);
```

### <a name="gg_createTag"></a>gg::createTag(name)


```javascript
return this._createClassType('/model/tags', name);
```

### <a name="gg_createUser"></a>gg::createUser(name)


```javascript
return this._createClassType('/model/users', name);
```

### gg::constructor( d )

```javascript

Promise = require("promise");

if(!Date.prototype.toMysqlFormat) {
    function twoDigits(d) {
        if(0 <= d && d < 10) return "0" + d.toString();
        if(-10 < d && d < 0) return "-0" + (-1*d).toString();
        return d.toString();
    }
    // extend the 
    Date.prototype.toMysqlFormat = function() {
        return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
    };
}

var Sequelize = require('sequelize');
var apiIni = require("./ggroundSetup.js");
// connection to the database...
var sequelize = new Sequelize(apiIni.db, apiIni.username, apiIni.password, apiIni.setup);

this._db = Sequelize;
this._dbNode = sequelize.define('node', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  created: { type: Sequelize.DATE},
  updated: { type: Sequelize.DATE},
  creator: { type: Sequelize.INTEGER},
  updater: { type: Sequelize.INTEGER},
  orderid: { type: Sequelize.INTEGER},
  parentid: { type: Sequelize.INTEGER},
  classname: { type: Sequelize.STRING(40)},
  objid: { type: Sequelize.INTEGER, defaultValue: 0},
  name: { type: Sequelize.STRING(128)},
  draftspace: { type: Sequelize.INTEGER, defaultValue: 0},
  archived: { type: Sequelize.INTEGER, defaultValue: 0}
},{
  timestamps: false,
  indexes: [
        {
          fields: ['classname','name']
        },  
        {
          fields: ['parentid']
        }, 
        {
          fields: ['parentid','classname']
        },         
        {
          fields: ['target_id', 'target_class_id', 'semantic_id','source_id', 'semantic_id', 'time_start', 'time_end']
        }
    ]
});
this._dbNode.sync();

// for graphs, measurements etc.
this._dbRelation = sequelize.define('node_relation', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  source_id: { type: Sequelize.INTEGER},
  source_class_id : { type: Sequelize.INTEGER},
  semantic_id: { type: Sequelize.INTEGER},
  time_start: { type: Sequelize.DATE},
  time_end    : { type: Sequelize.DATE},
  double_value : { type: Sequelize.FLOAT},
  decimal_value : { type: Sequelize.DECIMAL},
  target_id : { type: Sequelize.INTEGER},
  target_class_id : { type: Sequelize.INTEGER}
},{
  timestamps: false,
  indexes: [
        {
          fields: ['source_id', 'source_class_id', 'semantic_id']
        },
        {
          fields: ['source_id', 'semantic_id', 'target_id']
        },
        {
          fields: ['source_id', 'semantic_id', 'target_id', 'time_start', 'time_end']
        },        
        {
          fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id' ]
        },
        {
          fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id', 'time_start', 'time_end' ]
        },        
        {
          fields: ['target_id', 'target_class_id', 'semantic_id']
        },        
        {
          fields: ['target_id', 'target_class_id', 'semantic_id','source_id', 'semantic_id', 'time_start', 'time_end']
        }
    ]
});
this._dbRelation.sync();

// journal table, TODO: implement something
this._dbRelationJournal = sequelize.define('node_relation_journal', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  relation_id : { type: Sequelize.INTEGER},
  journal_time : { type: Sequelize.DATE},
  user_id : { type: Sequelize.INTEGER},
  removed : { type: Sequelize.INTEGER, defaultValue: 0},
  source_id: { type: Sequelize.INTEGER},
  source_class_id : { type: Sequelize.INTEGER},
  semantic_id: { type: Sequelize.INTEGER},
  time_start: { type: Sequelize.DATE},
  time_end    : { type: Sequelize.DATE},
  double_value : { type: Sequelize.FLOAT},
  decimal_value : { type: Sequelize.DECIMAL},
  target_id : { type: Sequelize.INTEGER},
  target_class_id : { type: Sequelize.INTEGER}
},{
  timestamps: false,
  indexes: [
        {
          fields: ['relation_id', 'user_id']
        },
        {
          fields: ['source_id', 'source_class_id', 'semantic_id']
        },
        {
          fields: ['source_id', 'semantic_id', 'target_id']
        },
        {
          fields: ['source_id', 'semantic_id', 'target_id', 'time_start', 'time_end']
        },        
        {
          fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id' ]
        },
        {
          fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id', 'time_start', 'time_end' ]
        },        
        {
          fields: ['target_id', 'target_class_id', 'semantic_id']
        },        
        {
          fields: ['target_id', 'target_class_id', 'semantic_id','source_id', 'semantic_id', 'time_start', 'time_end']
        }
    ]
});
this._dbRelationJournal.sync();

```
        
### <a name="gg_nodeInRole"></a>gg::nodeInRole(nodeClass, nodeRoleClass, nodeRole)


```javascript

/*

// --> saving something to the database
"user/matti/harjoittelija", "measurement/km", {
    start : 
    end   : 
    value : 
}, "action/treeni/juoksu"


this.createClass( nodeClass ).then( function() {
    
});
*/

var user,
    role,
    me = this;
var me = this;
return new Promise(
    function(resolve) {
        this.createRole( roleName ).then( function(roleObj) {
            role = roleObj;
            return me.createUser( userName );
        }).then( function(userObj) {
            user  = userObj;
            user.setRole( role );
            resolve(user);
        });
    });
```

### <a name="gg_relation"></a>gg::relation(who, semantics, values, target)


```javascript

var who_parts = who.split("/");         // users/matti/harjoittelija
var sem_parts = semantics.split("/");   // measurements/km
var tgt_parts = target.split("/");      // actions/treeni/juoksu

var sourceObj, sourceRole,
    targetObj, targetRole,
    semanticClass;

var me = this,
    values = values || {};

return new Promise(
    function(resolve) {
        me._createClassType("/model/"+who_parts[0], who_parts[1]).then( function(userObj) {
            sourceObj = userObj;
            return me.createRole(who_parts[2]);
        }).then( function(roleObj) {
            sourceRole = roleObj;
            return me._createClassType("/model/"+sem_parts[0], sem_parts[1]);
        }).then( function(semObj) {
            semanticClass = semObj;
            return me._createClassType("/model/"+tgt_parts[0], tgt_parts[1]);
        }).then( function(tgt) {
            targetObj = tgt;
            return me.createRole(tgt_parts[2]);
        }).then( function(tgtRole) {
            targetRole = tgtRole;
            // now there is everything ready to make the relation
            var rData = {
              source_id: sourceObj.id(),
              source_class_id : sourceRole.id(),
              semantic_id: semanticClass.id(),
              time_start    : me.time(),
              time_end    : me.time(),
              double_value : values.value || 0,
              decimal_value : values.value || 0,
              target_id : targetObj.id(),
              target_class_id : targetRole.id()
            };
            if(values.start) {
                // TODO: validate
                if(values.start.toMysqlFormat) {
                    rData.time_start = values.start.toMysqlFormat();
                } else {
                    rData.time_start = values.start;
                }
                if(values.end.toMysqlFormat) {
                    rData.time_end = values.end.toMysqlFormat();
                } else {
                    rData.time_end = values.end;
                }        
            }
            // Then, ready to insert the data...
            me._dbRelation.create(rData).then( function(data) {
                // Should create edge object here...
                resolve( data );
            });
            
        })
    });

/*

// --> saving something to the database
"user/matti/harjoittelija", "measurement/km", {
    start : 
    end   : 
    value : 
}, "action/treeni/juoksu"


this.createClass( nodeClass ).then( function() {
    
});
*/

/*
this._dbRelation.create( {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  source_id: { type: Sequelize.INTEGER},
  source_class_id : { type: Sequelize.INTEGER},
  semantic_id: { type: Sequelize.INTEGER},
  time_start: { type: Sequelize.DATE},
  time_end    : { type: Sequelize.DATE},
  double_value : { type: Sequelize.FLOAT},
  decimal_value : { type: Sequelize.DECIMAL},
  target_id : { type: Sequelize.INTEGER},
  target_class_id : { type: Sequelize.INTEGER}
},{
*/

```

### <a name="gg_sumsOf"></a>gg::sumsOf(who, semantics, limits, target)


```javascript

var who_parts = who.split("/");         // users/matti/harjoittelija
var sem_parts = semantics.split("/");   // measurements/km
var tgt_parts = target.split("/");      // actions/treeni/juoksu

var sourceObj, sourceRole,
    targetObj, targetRole,
    semanticClass;

var me = this,
    values = values || {},
    filter = {};

return new Promise(
    function(resolve) {

        me._createClassType("/model/"+who_parts[0], who_parts[1]).then( function(userObj) {
            sourceObj = userObj;
            if(who_parts[2]) return me.createRole(who_parts[2]);
            return null;
        }).then( function(roleObj) {
            sourceRole = roleObj;
            return me._createClassType("/model/"+sem_parts[0], sem_parts[1]);
        }).then( function(semObj) {
            semanticClass = semObj;
            return me._createClassType("/model/"+tgt_parts[0], tgt_parts[1]);
        }).then( function(tgt) {
            targetObj = tgt;
            if(tgt_parts[2]) return me.createRole(tgt_parts[2]);
            return null;
        }).then( function(tgtRole) {
            targetRole = tgtRole;
            // now there is everything ready to make the relation
            var rData = {
              source_id: sourceObj.id(),
              semantic_id: semanticClass.id(),
              target_id : targetObj.id(),
            };
            if(targetRole) rData.target_class_id = targetRole.id();
            if(sourceRole) rData.source_class_id = sourceRole.id();
            
            // TODO: add start / end limits from the limits...
            
            // Then, ready to insert the data...
            me._dbRelation.sum('double_value', { where: rData }).then(function(sum) {
                resolve( sum );
            });

            
        })
    });

```

### <a name="gg_time"></a>gg::time(t)


```javascript
return (new Date()).toMysqlFormat();
```

### <a name="gg_userid"></a>gg::userid(t)


```javascript
return 1;
```

### <a name="gg_userInRole"></a>gg::userInRole(userName, roleName)


```javascript
var user,
    role,
    me = this;
var me = this;
return new Promise(
    function(resolve) {
        this.createRole( roleName ).then( function(roleObj) {
            role = roleObj;
            return me.createUser( userName );
        }).then( function(userObj) {
            user  = userObj;
            user.setRole( role );
            resolve(user);
        });
    });
```



   
    
    
    
    
    
    
    
    


   
      
            
# Class edge


The class has following internal singleton variables:
        
        
### edge::constructor( options )

```javascript

```
        


   


   



      
    
      
            
# Class dataClass


The class has following internal singleton variables:
        
        
### <a name="dataClass_getRole"></a>dataClass::getRole(t)


```javascript
return this._role;
```

### <a name="dataClass_id"></a>dataClass::id(t)


```javascript
return this._model.id;
```

### dataClass::constructor( obj, model )

```javascript

this._dataObj = obj;
this._model = obj;
```
        
### <a name="dataClass_setRole"></a>dataClass::setRole(roleObj)


```javascript
this._role = roleObj;
```



   


   



      
    
      
            
# Class dataTag


The class has following internal singleton variables:
        
        
### dataTag::constructor( obj, model )

```javascript

this._dataObj = obj;
this._model = obj;
```
        


   


   



      
    
      
            
# Class dataNode


The class has following internal singleton variables:
        
        
### <a name="dataNode_getRoleId"></a>dataNode::getRoleId(t)


```javascript
return this._roleId;
```

### <a name="dataNode_id"></a>dataNode::id(t)


```javascript
return this._model.id;
```

### dataNode::constructor( obj, model )

```javascript

this._dataObj = obj;
this._model = obj;
```
        
### <a name="dataNode_setRoleId"></a>dataNode::setRoleId(id)


```javascript
this._roleId = id;
```



   


   



      
    




