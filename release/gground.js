'use strict';

(function () {

  var __amdDefs__ = {};

  var edge_prototype = function edge_prototype() {

    (function (_myTrait_) {

      // Initialize static variables here...

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (options) {});
    })(this);
  };

  var edge = function edge(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof edge) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != edge._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new edge(a, b, c, d, e, f, g, h);
  };

  edge._classInfo = {
    name: 'edge'
  };
  edge.prototype = new edge_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['edge'] = edge;
      this.edge = edge;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['edge'] = edge;
    } else {
      this.edge = edge;
    }
  }).call(new Function('return this')());

  var dataClass_prototype = function dataClass_prototype() {

    (function (_myTrait_) {

      // Initialize static variables here...

      /**
       * @param float t
       */
      _myTrait_.getRole = function (t) {
        return this._role;
      };

      /**
       * @param float t
       */
      _myTrait_.id = function (t) {
        return this._model.id;
      };

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (obj, model) {

        this._dataObj = obj;
        this._model = obj;
      });

      /**
       * @param Object roleObj
       */
      _myTrait_.setRole = function (roleObj) {
        this._role = roleObj;
      };
    })(this);
  };

  var dataClass = function dataClass(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof dataClass) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != dataClass._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new dataClass(a, b, c, d, e, f, g, h);
  };

  dataClass._classInfo = {
    name: 'dataClass'
  };
  dataClass.prototype = new dataClass_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['dataClass'] = dataClass;
      this.dataClass = dataClass;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['dataClass'] = dataClass;
    } else {
      this.dataClass = dataClass;
    }
  }).call(new Function('return this')());

  var dataTag_prototype = function dataTag_prototype() {

    (function (_myTrait_) {

      // Initialize static variables here...

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (obj, model) {

        this._dataObj = obj;
        this._model = obj;
      });
    })(this);
  };

  var dataTag = function dataTag(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof dataTag) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != dataTag._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new dataTag(a, b, c, d, e, f, g, h);
  };

  dataTag._classInfo = {
    name: 'dataTag'
  };
  dataTag.prototype = new dataTag_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['dataTag'] = dataTag;
      this.dataTag = dataTag;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['dataTag'] = dataTag;
    } else {
      this.dataTag = dataTag;
    }
  }).call(new Function('return this')());

  var dataNode_prototype = function dataNode_prototype() {

    (function (_myTrait_) {

      // Initialize static variables here...

      /**
       * @param float t
       */
      _myTrait_.getRoleId = function (t) {
        return this._roleId;
      };

      /**
       * @param float t
       */
      _myTrait_.id = function (t) {
        return this._model.id;
      };

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (obj, model) {

        this._dataObj = obj;
        this._model = obj;
      });

      /**
       * @param int id
       */
      _myTrait_.setRoleId = function (id) {
        this._roleId = id;
      };
    })(this);
  };

  var dataNode = function dataNode(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof dataNode) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != dataNode._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new dataNode(a, b, c, d, e, f, g, h);
  };

  dataNode._classInfo = {
    name: 'dataNode'
  };
  dataNode.prototype = new dataNode_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['dataNode'] = dataNode;
      this.dataNode = dataNode;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['dataNode'] = dataNode;
    } else {
      this.dataNode = dataNode;
    }
  }).call(new Function('return this')());

  var gg_prototype = function gg_prototype() {

    (function (_myTrait_) {
      var Promise;

      // Initialize static variables here...

      /**
       * @param String className
       * @param String name
       */
      _myTrait_._createClassType = function (className, name) {
        var me = this;
        return new Promise(function (resolve) {
          var pid = 0;
          me._dbNode.findOrCreate({
            classname: className,
            name: name
          }).then(function (obj, created) {
            if (obj.options.isNewRecord) {
              obj.updateAttributes({
                created: me.time(),
                updated: me.time(),
                creator: me.userid(),
                updater: me.userid(),
                parentid: pid
              }).then(function () {
                resolve(dataClass(obj, me));
              });
            } else {
              resolve(dataClass(obj, me));
            }
          });
        });
      };

      /**
       * @param float t
       */
      _myTrait_._sumTest = function (t) {

        // This is how easy it is to create a sum of some values...
        this._dbRelation.sum('double_value', {
          where: {
            semantic_id: 9
          }
        }).then(function (sum) {
          console.log('The sum was ', sum);
        });
      };

      /**
       * @param float name
       * @param float underParentNode
       */
      _myTrait_.createClass = function (name, underParentNode) {
        return this._createClassType('/model/classes', name);
      };

      /**
       * @param String name
       * @param Object Options
       */
      _myTrait_.createNode = function (name, Options) {
        return this._createClassType('/model/nodes', name);
      };

      /**
       * @param String name
       */
      _myTrait_.createRole = function (name) {
        return this._createClassType('/model/roles', name);
      };

      /**
       * @param float name
       */
      _myTrait_.createTag = function (name) {
        return this._createClassType('/model/tags', name);
      };

      /**
       * @param float name
       */
      _myTrait_.createUser = function (name) {
        return this._createClassType('/model/users', name);
      };

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (d) {

        Promise = require('promise');

        if (!Date.prototype.toMysqlFormat) {
          (function () {
            var twoDigits = function (d) {
              if (0 <= d && d < 10) return '0' + d.toString();
              if (-10 < d && d < 0) return '-0' + (-1 * d).toString();
              return d.toString();
            };

            // extend the
            Date.prototype.toMysqlFormat = function () {
              return this.getUTCFullYear() + '-' + twoDigits(1 + this.getUTCMonth()) + '-' + twoDigits(this.getUTCDate()) + ' ' + twoDigits(this.getUTCHours()) + ':' + twoDigits(this.getUTCMinutes()) + ':' + twoDigits(this.getUTCSeconds());
            };
          })();
        }

        var Sequelize = require('sequelize');
        var apiIni = require('./ggroundSetup.js');
        // connection to the database...
        var sequelize = new Sequelize(apiIni.db, apiIni.username, apiIni.password, apiIni.setup);

        this._db = Sequelize;
        this._dbNode = sequelize.define('node', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          created: {
            type: Sequelize.DATE
          },
          updated: {
            type: Sequelize.DATE
          },
          creator: {
            type: Sequelize.INTEGER
          },
          updater: {
            type: Sequelize.INTEGER
          },
          orderid: {
            type: Sequelize.INTEGER
          },
          parentid: {
            type: Sequelize.INTEGER
          },
          classname: {
            type: Sequelize.STRING(40)
          },
          objid: {
            type: Sequelize.INTEGER,
            defaultValue: 0
          },
          name: {
            type: Sequelize.STRING(128)
          },
          draftspace: {
            type: Sequelize.INTEGER,
            defaultValue: 0
          },
          archived: {
            type: Sequelize.INTEGER,
            defaultValue: 0
          }
        }, {
          timestamps: false,
          indexes: [{
            fields: ['classname', 'name']
          }, {
            fields: ['parentid']
          }, {
            fields: ['parentid', 'classname']
          }, {
            fields: ['target_id', 'target_class_id', 'semantic_id', 'source_id', 'semantic_id', 'time_start', 'time_end']
          }]
        });
        this._dbNode.sync();

        // for graphs, measurements etc.
        this._dbRelation = sequelize.define('node_relation', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          source_id: {
            type: Sequelize.INTEGER
          },
          source_class_id: {
            type: Sequelize.INTEGER
          },
          semantic_id: {
            type: Sequelize.INTEGER
          },
          time_start: {
            type: Sequelize.DATE
          },
          time_end: {
            type: Sequelize.DATE
          },
          double_value: {
            type: Sequelize.FLOAT
          },
          decimal_value: {
            type: Sequelize.DECIMAL
          },
          target_id: {
            type: Sequelize.INTEGER
          },
          target_class_id: {
            type: Sequelize.INTEGER
          }
        }, {
          timestamps: false,
          indexes: [{
            fields: ['source_id', 'source_class_id', 'semantic_id']
          }, {
            fields: ['source_id', 'semantic_id', 'target_id']
          }, {
            fields: ['source_id', 'semantic_id', 'target_id', 'time_start', 'time_end']
          }, {
            fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id']
          }, {
            fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id', 'time_start', 'time_end']
          }, {
            fields: ['target_id', 'target_class_id', 'semantic_id']
          }, {
            fields: ['target_id', 'target_class_id', 'semantic_id', 'source_id', 'semantic_id', 'time_start', 'time_end']
          }]
        });
        this._dbRelation.sync();

        // journal table, TODO: implement something
        this._dbRelationJournal = sequelize.define('node_relation_journal', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          relation_id: {
            type: Sequelize.INTEGER
          },
          journal_time: {
            type: Sequelize.DATE
          },
          user_id: {
            type: Sequelize.INTEGER
          },
          removed: {
            type: Sequelize.INTEGER,
            defaultValue: 0
          },
          source_id: {
            type: Sequelize.INTEGER
          },
          source_class_id: {
            type: Sequelize.INTEGER
          },
          semantic_id: {
            type: Sequelize.INTEGER
          },
          time_start: {
            type: Sequelize.DATE
          },
          time_end: {
            type: Sequelize.DATE
          },
          double_value: {
            type: Sequelize.FLOAT
          },
          decimal_value: {
            type: Sequelize.DECIMAL
          },
          target_id: {
            type: Sequelize.INTEGER
          },
          target_class_id: {
            type: Sequelize.INTEGER
          }
        }, {
          timestamps: false,
          indexes: [{
            fields: ['relation_id', 'user_id']
          }, {
            fields: ['source_id', 'source_class_id', 'semantic_id']
          }, {
            fields: ['source_id', 'semantic_id', 'target_id']
          }, {
            fields: ['source_id', 'semantic_id', 'target_id', 'time_start', 'time_end']
          }, {
            fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id']
          }, {
            fields: ['source_id', 'source_class_id', 'semantic_id', 'target_id', 'target_class_id', 'time_start', 'time_end']
          }, {
            fields: ['target_id', 'target_class_id', 'semantic_id']
          }, {
            fields: ['target_id', 'target_class_id', 'semantic_id', 'source_id', 'semantic_id', 'time_start', 'time_end']
          }]
        });
        this._dbRelationJournal.sync();
      });

      /**
       * This function is currently not used for anything - in the future it could be used to ease up inserting certain kind of data in object oriented way.
       * @param String nodeClass
       * @param String nodeRoleClass
       * @param float nodeRole
       */
      _myTrait_.nodeInRole = function (nodeClass, nodeRoleClass, nodeRole) {

        var user,
            role,
            me = this;
        var me = this;
        return new Promise(function (resolve) {
          this.createRole(roleName).then(function (roleObj) {
            role = roleObj;
            return me.createUser(userName);
          }).then(function (userObj) {
            user = userObj;
            user.setRole(role);
            resolve(user);
          });
        });
      };

      /**
       * A very simple interface for adding semantical information into database
       * @param String who
       * @param String semantics
       * @param Object values
       * @param String target
       */
      _myTrait_.relation = function (who, semantics, values, target) {

        var who_parts = who.split('/'); // users/matti/harjoittelija
        var sem_parts = semantics.split('/'); // measurements/km
        var tgt_parts = target.split('/'); // actions/treeni/juoksu

        var sourceObj, sourceRole, targetObj, targetRole, semanticClass;

        var me = this,
            values = values || {};

        return new Promise(function (resolve) {
          me._createClassType('/model/' + who_parts[0], who_parts[1]).then(function (userObj) {
            sourceObj = userObj;
            return me.createRole(who_parts[2]);
          }).then(function (roleObj) {
            sourceRole = roleObj;
            return me._createClassType('/model/' + sem_parts[0], sem_parts[1]);
          }).then(function (semObj) {
            semanticClass = semObj;
            return me._createClassType('/model/' + tgt_parts[0], tgt_parts[1]);
          }).then(function (tgt) {
            targetObj = tgt;
            return me.createRole(tgt_parts[2]);
          }).then(function (tgtRole) {
            targetRole = tgtRole;
            // now there is everything ready to make the relation
            var rData = {
              source_id: sourceObj.id(),
              source_class_id: sourceRole.id(),
              semantic_id: semanticClass.id(),
              time_start: me.time(),
              time_end: me.time(),
              double_value: values.value || 0,
              decimal_value: values.value || 0,
              target_id: targetObj.id(),
              target_class_id: targetRole.id()
            };
            if (values.start) {
              // TODO: validate
              if (values.start.toMysqlFormat) {
                rData.time_start = values.start.toMysqlFormat();
              } else {
                rData.time_start = values.start;
              }
              if (values.end.toMysqlFormat) {
                rData.time_end = values.end.toMysqlFormat();
              } else {
                rData.time_end = values.end;
              }
            }
            // Then, ready to insert the data...
            me._dbRelation.create(rData).then(function (data) {
              // Should create edge object here...
              resolve(data);
            });
          });
        });
      };

      /**
       * @param String who
       * @param String semantics
       * @param Object limits
       * @param String target
       */
      _myTrait_.sumsOf = function (who, semantics, limits, target) {

        var who_parts = who.split('/'); // users/matti/harjoittelija
        var sem_parts = semantics.split('/'); // measurements/km
        var tgt_parts = target.split('/'); // actions/treeni/juoksu

        var sourceObj, sourceRole, targetObj, targetRole, semanticClass;

        var me = this,
            values = values || {},
            filter = {};

        return new Promise(function (resolve) {

          me._createClassType('/model/' + who_parts[0], who_parts[1]).then(function (userObj) {
            sourceObj = userObj;
            if (who_parts[2]) return me.createRole(who_parts[2]);
            return null;
          }).then(function (roleObj) {
            sourceRole = roleObj;
            return me._createClassType('/model/' + sem_parts[0], sem_parts[1]);
          }).then(function (semObj) {
            semanticClass = semObj;
            return me._createClassType('/model/' + tgt_parts[0], tgt_parts[1]);
          }).then(function (tgt) {
            targetObj = tgt;
            if (tgt_parts[2]) return me.createRole(tgt_parts[2]);
            return null;
          }).then(function (tgtRole) {
            targetRole = tgtRole;
            // now there is everything ready to make the relation
            var rData = {
              source_id: sourceObj.id(),
              semantic_id: semanticClass.id(),
              target_id: targetObj.id() };
            if (targetRole) rData.target_class_id = targetRole.id();
            if (sourceRole) rData.source_class_id = sourceRole.id();

            // TODO: add start / end limits from the limits...

            // Then, ready to insert the data...
            me._dbRelation.sum('double_value', {
              where: rData
            }).then(function (sum) {
              resolve(sum);
            });
          });
        });
      };

      /**
       * @param float t
       */
      _myTrait_.time = function (t) {
        return new Date().toMysqlFormat();
      };

      /**
       * @param float t
       */
      _myTrait_.userid = function (t) {
        return 1;
      };

      /**
       * @param String userName
       * @param float roleName
       */
      _myTrait_.userInRole = function (userName, roleName) {
        var user,
            role,
            me = this;
        var me = this;
        return new Promise(function (resolve) {
          this.createRole(roleName).then(function (roleObj) {
            role = roleObj;
            return me.createUser(userName);
          }).then(function (userObj) {
            user = userObj;
            user.setRole(role);
            resolve(user);
          });
        });
      };
    })(this);
  };

  var gg = function gg(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof gg) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != gg._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new gg(a, b, c, d, e, f, g, h);
  };

  gg._classInfo = {
    name: 'gg'
  };
  gg.prototype = new gg_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['gg'] = gg;
      this.gg = gg;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['gg'] = gg;
    } else {
      this.gg = gg;
    }
  }).call(new Function('return this')());

  if (typeof define !== 'undefined' && define !== null && define.amd != null) {
    define(__amdDefs__);
  }
}).call(new Function('return this')());