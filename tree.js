import React, { Component, Children } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Column =
/*#__PURE__*/
function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, _getPrototypeOf(Column).apply(this, arguments));
  }

  _createClass(Column, [{
    key: "render",
    // NOTE: Used to filter TreeTable children props
    value: function render() {
      return null;
    }
  }]);

  return Column;
}(Component);

_defineProperty(Column, "displayName", 'TreeTable.Column');

var HeaderCellWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderCellWrapper, _Component);

  function HeaderCellWrapper() {
    _classCallCheck(this, HeaderCellWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderCellWrapper).apply(this, arguments));
  }

  _createClass(HeaderCellWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderHeaderCell = _this$props.renderHeaderCell,
          grow = _this$props.grow,
          basis = _this$props.basis;
      return React.createElement("div", {
        className: "cp_tree-table_header-cell",
        style: _objectSpread2({}, STYLE_COLUMN, {
          flexGrow: grow,
          flexBasis: basis
        })
      }, renderHeaderCell());
    }
  }]);

  return HeaderCellWrapper;
}(Component);

_defineProperty(HeaderCellWrapper, "defaultProps", {
  grow: 1,
  basis: '0px'
});
var STYLE_COLUMN = {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%'
};

var TreeTableHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeTableHeader, _Component);

  function TreeTableHeader() {
    _classCallCheck(this, TreeTableHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeTableHeader).apply(this, arguments));
  }

  _createClass(TreeTableHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          height = _this$props.height;
      return React.createElement("div", {
        className: "cp_tree-table_header",
        style: _objectSpread2({}, STYLE_ROW, {
          height: "".concat(height, "px")
        })
      }, columns.map(function (column, indexKey) {
        return React.createElement(HeaderCellWrapper, {
          key: indexKey,
          renderHeaderCell: column.renderHeaderCell,
          grow: column.grow,
          basis: column.basis
        });
      }));
    }
  }]);

  return TreeTableHeader;
}(Component);

_defineProperty(TreeTableHeader, "defaultProps", {
  height: 26
});
var STYLE_ROW = {
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%'
};

var CellWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(CellWrapper, _Component);

  function CellWrapper() {
    _classCallCheck(this, CellWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(CellWrapper).apply(this, arguments));
  }

  _createClass(CellWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          row = _this$props.row,
          renderCell = _this$props.renderCell,
          grow = _this$props.grow,
          basis = _this$props.basis;
      return React.createElement("div", {
        className: "cp_tree-table_cell",
        style: _objectSpread2({}, STYLE_COLUMN$1, {
          flexGrow: grow,
          flexBasis: basis
        })
      }, renderCell(row));
    }
  }]);

  return CellWrapper;
}(Component);

_defineProperty(CellWrapper, "defaultProps", {
  grow: 1,
  basis: '0px'
});
var STYLE_COLUMN$1 = {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%'
};

// The default height (in pixels) for a row
var ROW_DEFAULT_HEIGHT = 26;

var RowModel = function RowModel(data, metadata, state) {
  _classCallCheck(this, RowModel);

  _defineProperty(this, "data", void 0);

  _defineProperty(this, "metadata", void 0);

  _defineProperty(this, "$state", void 0);

  this.data = data;
  this.$state = state;
  this.metadata = metadata;
};

_defineProperty(RowModel, "DEFAULT_HEIGHT", ROW_DEFAULT_HEIGHT);

var Row =
/*#__PURE__*/
function (_RowModel) {
  _inherits(Row, _RowModel);

  // RowAPI
  function Row(model, api) {
    var _this;

    _classCallCheck(this, Row);

    // RowModel
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Row).call(this, model.data, model.metadata, model.$state)); // RowAPI

    _defineProperty(_assertThisInitialized(_this), "toggleChildren", void 0);

    _defineProperty(_assertThisInitialized(_this), "updateData", void 0);

    _this.toggleChildren = api.toggleChildren;
    _this.updateData = api.updateData;
    return _this;
  }

  return Row;
}(RowModel);

var TreeState =
/*#__PURE__*/
function () {
  function TreeState(data) {
    _classCallCheck(this, TreeState);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "height", void 0);

    _defineProperty(this, "hasData", void 0);

    this.data = data;
    this.hasData = data.length > 0;
    this.height = data.length == 0 ? 0 : data[data.length - 1].$state.isVisible ? data[data.length - 1].$state.top + data[data.length - 1].metadata.height : data[data.length - 1].$state.top;
  }

  _createClass(TreeState, [{
    key: "findRowModel",
    value: function findRowModel(node) {
      if (node.data == null) {
        throw new Error("Invalid TreeNode! No data property: ".concat(node, "."));
      }

      if (!this.hasData) {
        return;
      }

      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].data == node.data) {
          return this.data[i];
        }
      }

      return;
    }
  }, {
    key: "indexAtYPos",
    value: function indexAtYPos(yPos) {
      if (yPos < 0 || yPos > this.height) {
        throw new Error("Invalid y position! No row at y: ".concat(yPos, "."));
      }

      var i = 0;

      for (; i < this.data.length; i++) {
        var model = this.data[i];

        if (model.$state.isVisible && model.$state.top + model.metadata.height > yPos) {
          break;
        }
      }

      return i;
    }
  }, {
    key: "yPosAtIndex",
    value: function yPosAtIndex(index) {
      if (index < 0 || index >= this.data.length) {
        throw new Error("Invalid index! No row at index: ".concat(index, "."));
      }

      return this.data[index].$state.top;
    }
  }], [{
    key: "create",
    value: function create(data) {
      function _processNode(children, depth, index, top) {
        var isVisible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var result = [];
        var _top = top;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;
          
            if (child.children != null && child.children.length > 0) {
              // hasChildren
              result.push(new RowModel(child.data, {
                // Metadata
                depth: depth,
                index: index++,
                height: child.height || RowModel.DEFAULT_HEIGHT,
                hasChildren: true,
                highlight : ""
              }, {
                // State
                isVisible: isVisible,
                top: _top
              }));

              if (isVisible) {
                _top += child.height || RowModel.DEFAULT_HEIGHT;
              }

              var grandchildren = _processNode(child.children, depth + 1, index, _top);

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = grandchildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var grandchild = _step2.value;
                  result.push(grandchild);
                  index++;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            } else {
              result.push(new RowModel(child.data, {
                // Metadata
                depth: depth,
                index: index++,
                height: child.height || RowModel.DEFAULT_HEIGHT,
                hasChildren: false,
                highlight : ""
              }, {
                // State
                isVisible: isVisible,
                top: _top
              }));

              if (isVisible) {
                _top += child.height || RowModel.DEFAULT_HEIGHT;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return result;
      }

      var rowModels = _processNode(data, 0, 0, 0, true);

      return new TreeState(rowModels);
    }
  }, {
    key: "createEmpty",
    value: function createEmpty() {
      return new TreeState([]);
    }
  }, {
    key: "sliceRows",
    value: function sliceRows(source, from, to) {
      if (from < 0) {
        throw new Error('Invalid range: from < 0 (${from} < 0).');
      }

      if (from > source.data.length) {
        throw new Error('Invalid range: from > max size (${from} > ${source.data.length}).');
      }

      if (to > source.data.length) {
        throw new Error('Invalid range: to > max size (${to} > ${source.data.length}).');
      }

      if (from > to) {
        throw new Error('Invalid range: from > to (${from} > ${to}).');
      }

      return source.data.slice(from, to);
    }
  }, {
    key: "_hideRowsInRange",
    value: function _hideRowsInRange(source) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.data.length;
      var startRange = TreeState.sliceRows(source, 0, from);
      var _top = source.data[from].$state.top;
      var updatedRange = TreeState.sliceRows(source, from, to).map(function (model) {
        if (model.metadata.depth > 0 && model.$state.isVisible) {
          model.$state.isVisible = false;
        }

        model.$state.top = _top;

        if (model.$state.isVisible) {
          _top += model.metadata.height;
        }

        return model;
      });
      var endRange = TreeState.sliceRows(source, to, source.data.length).map(function (model) {
        model.$state.top = _top;

        if (model.$state.isVisible) {
          _top += model.metadata.height;
        }

        return model;
      });
      return new TreeState(startRange.concat(updatedRange, endRange));
    }
  }, {
    key: "_showRowsInRange",
    value: function _showRowsInRange(source) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.data.length;
      var depthLimit = arguments.length > 3 ? arguments[3] : undefined;
      var startRange = TreeState.sliceRows(source, 0, from);
      var _top = source.data[from].$state.top;
      var updatedRange = TreeState.sliceRows(source, from, to).map(function (model) {
        if (model.metadata.depth > 0 && !model.$state.isVisible) {
          // If a depthLimit value is set, only show nodes with a depth value less or equal
          if (depthLimit == null || depthLimit != null && model.metadata.depth <= depthLimit) {
            model.$state.isVisible = true;
          }
        }

        model.$state.top = _top;

        if (model.$state.isVisible) {
          _top += model.metadata.height;
        }

        return model;
      });
      var endRange = TreeState.sliceRows(source, to, source.data.length).map(function (model) {
        model.$state.top = _top;

        if (model.$state.isVisible) {
          _top += model.metadata.height;
        }

        return model;
      });
      return new TreeState(startRange.concat(updatedRange, endRange));
    }
  }, {
    key: "expandAll",
    value: function expandAll(source, depthLimit) {
      return TreeState._showRowsInRange(source, undefined, undefined, depthLimit);
    }
  }, {
    key: "collapseAll",
    value: function collapseAll(source) {
      return TreeState._hideRowsInRange(source);
    }
  }, {
    key: "expandAncestors",
    value: function expandAncestors(source, model) {
      if (!source.hasData) {
        return TreeState.createEmpty();
      }

      if (model.$state.isVisible || model.metadata.depth == 0 || model.metadata.index == 0) {
        return new TreeState(source.data.slice());
      } // Find range start


      var startIndex = model.metadata.index - 1;

      for (; startIndex >= 0; startIndex--) {
        var currentRowModel = source.data[startIndex];

        if (currentRowModel.metadata.depth == 0) {
          break;
        }
      } // Find range end


      var endIndex = model.metadata.index;

      for (; endIndex < source.data.length; endIndex++) {
        var _currentRowModel = source.data[endIndex];

        if (_currentRowModel.metadata.depth !== model.metadata.depth) {
          break;
        }
      }

      return TreeState._showRowsInRange(source, startIndex, endIndex);
    }
  }, {
    key: "toggleChildren",
    value: function toggleChildren(source, model) {
      if (model.metadata.index == source.data.length - 1 // Last item, no children available
      || model.metadata.hasChildren == false) {
        return new TreeState(source.data.slice());
      }

      var currentDepth = model.metadata.depth;
      var shouldToggleOpen = null;
      var lastChildIndex = model.metadata.index + 1;

      for (; lastChildIndex < source.data.length; lastChildIndex++) {
        var currentRow = source.data[lastChildIndex];

        if (currentRow.metadata.depth < currentDepth + 1) {
          break;
        }

        if (shouldToggleOpen == null) {
          shouldToggleOpen = !currentRow.$state.isVisible;
        }
      }

      return shouldToggleOpen ? TreeState._showRowsInRange(source, model.metadata.index + 1, lastChildIndex, currentDepth + 1) : TreeState._hideRowsInRange(source, model.metadata.index + 1, lastChildIndex);
    }
  }, {
    key: "updateData",
    value: function updateData(source, model, newData) {
      var startRange = TreeState.sliceRows(source, 0, model.metadata.index);
      var updatedRange = [new RowModel(newData, model.metadata, model.$state)];
      var endRange = TreeState.sliceRows(source, model.metadata.index + 1, source.data.length);
      return new TreeState(startRange.concat(updatedRange, endRange));
    }
  }]);

  return TreeState;
}();

var createRow = function createRow(model, source, onChangeCb) {
  var rowAPI = {
    toggleChildren: function toggleChildren() {
      var nextState = TreeState.toggleChildren(source, model);
      onChangeCb(nextState);
    },
    updateData: function updateData(newData) {
      var nextState = TreeState.updateData(source, model, newData);
      onChangeCb(nextState);
    }
  };
  return new Row(model, rowAPI);
};

var VirtualListRow =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualListRow, _Component);

  function VirtualListRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VirtualListRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VirtualListRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      var onChange = _this.props.onChange;
      onChange(value);
    });

    return _this;
  }

  _createClass(VirtualListRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          model = _this$props.model,
          columns = _this$props.columns,
          data = _this$props.data,
          index = _this$props.index,
          relIndex = _this$props.relIndex;
      var row = createRow(model, data, this.handleChange);
     
      return React.createElement("div", {
        className: (row.data.searchValue == 'red' ? 'highlight-row cp_tree-table_row' : 'cp_tree-table_row' ), 
        style: _objectSpread2({}, STYLE_ROW$1, {
          height: "".concat(row.metadata.height, "px"),
         }),
        "data-index": index,
        "data-relindex": relIndex
      }, columns.map(function (column, indexKey) {
        return React.createElement(CellWrapper, {
          key: indexKey,
          row: row,
          renderCell: column.renderCell,
          grow: column.grow,
          basis: column.basis
        });
      }));
    }
  }]);

  return VirtualListRow;
}(Component);
var STYLE_ROW$1 = {
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%'
};

function createRefPolyfill() {
  if (React.createRef != null) {
    return React.createRef();
  }

  var ref = function ref(instance) {
    ref.current = instance;
  };

  ref(null);
  return ref;
}

var VirtualList =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualList, _Component);

  function VirtualList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VirtualList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VirtualList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      topOffset: 0,
      overscanHeight: 100
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", createRefPolyfill());

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      if (_this.containerRef.current != null) {
        var _scrollTop = _this.containerRef.current.scrollTop;
        var onScroll = _this.props.onScroll;
        onScroll(_scrollTop);

        _this.setState({
          topOffset: _scrollTop
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (posY) {
      if (_this.containerRef.current != null) {
        _this.containerRef.current.scrollTop = posY;
      }
    });

    return _this;
  }

  _createClass(VirtualList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          columns = _this$props.columns,
          height = _this$props.height,
          onChange = _this$props.onChange;
      var _this$state = this.state,
          topOffset = _this$state.topOffset,
          overscanHeight = _this$state.overscanHeight;
      var startYMax = Math.max(0, data.height - height - overscanHeight * 2);
      var startY = Math.min(startYMax, Math.max(0, topOffset - overscanHeight));
      var startIndex = data.indexAtYPos(startY);
      var endY = Math.min(data.height, topOffset + height + overscanHeight);
      var endIndex = data.indexAtYPos(endY);
      var contentTopOffset = data.yPosAtIndex(startIndex);
      var visibleRowsData = [];
      TreeState.sliceRows(data, startIndex, endIndex).forEach(function (rowModel) {
        if (rowModel.$state.isVisible) {
          visibleRowsData.push(rowModel);
        }
      });
      var visibleVLRows = visibleRowsData.map(function (rowModel, relIndex) {
        return React.createElement(VirtualListRow, {
          key: relIndex,
          data: data,
          model: rowModel,
          columns: columns,
          onChange: onChange,
          index: rowModel.metadata.index,
          relIndex: relIndex
        });
      });
      return React.createElement("div", {
        className: "cp_tree-table_viewport",
        style: _objectSpread2({}, STYLE_LIST, {
          height: "".concat(height, "px")
        }),
        ref: this.containerRef,
        onScroll: this.handleScroll
      }, React.createElement("div", {
        style: _objectSpread2({}, STYLE_WRAPPER, {
          height: "".concat(data.height, "px")
        })
      }, React.createElement("div", {
        style: _objectSpread2({}, STYLE_CONTENT, {
          top: "".concat(contentTopOffset, "px")
        }),
        className: "cp_tree-table_mover"
      }, visibleVLRows)));
    }
  }]);

  return VirtualList;
}(Component);
var STYLE_LIST = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch'
};
var STYLE_WRAPPER = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '100%'
};
var STYLE_CONTENT = {
  position: 'absolute',
  overflow: 'visible',
  height: '100%',
  width: '100%',
  top: '0px',
  left: '0px'
};

var TABLE_DEFAULT_HEIGHT = 400;

var noopOnChange = function noopOnChange(value) {};

var noopOnScroll = function noopOnScroll(scrollTop) {};

var TreeTable =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeTable, _Component);

  function TreeTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TreeTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TreeTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "vListRef", createRefPolyfill());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      var onChange = _this.props.onChange;
      (onChange || noopOnChange)(value);
    });

    return _this;
  }

  _createClass(TreeTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          onChange = _this$props.onChange,
          onScroll = _this$props.onScroll,
          height = _this$props.height,
          headerHeight = _this$props.headerHeight,
          className = _this$props.className;
      var columnsDef = [];
      Children.toArray(children).forEach(function (node) {
        if (isColumnElement(node)) {
          columnsDef.push(node.props);
        }
      });
      return React.createElement("div", {
        className: "cp_tree-table ".concat(className != null && className)
      }, React.createElement(TreeTableHeader, {
        columns: columnsDef,
        height: headerHeight
      }), value.hasData && React.createElement(VirtualList, {
        data: value,
        columns: columnsDef,
        height: Number(height) || TABLE_DEFAULT_HEIGHT,
        onChange: onChange || noopOnChange,
        ref: this.vListRef,
        onScroll: onScroll || noopOnScroll
      }));
    }
  }, {
    key: "scrollTo",
    // Public API
    value: function scrollTo(posY) {
      if (this.vListRef.current != null) {
        this.vListRef.current.scrollTo(posY);
      }
    }
  }]);

  return TreeTable;
}(Component);

_defineProperty(TreeTable, "Column", Column);

var isColumnElement = function isColumnElement(elem) {
  return checkElementType(elem, Column);
};

var checkElementType = function checkElementType(elem, cmpType) {
  return elem != null && elem.type != null && elem.type.displayName != null && elem.type.displayName === cmpType.displayName;
};

export { Row, RowModel, TreeState, TreeTable };
