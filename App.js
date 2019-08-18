import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TreeTable, TreeState } from './tree';


 

function genData() {
	return [
    {
      data: { name: 'Company A', expenses: '60,000', employees: '5', contact: 'Nicholas Watson' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company B', expenses: '70,000', employees: '5', contact: 'Dani Hopkinson' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company C', expenses: '50,000', employees: '4', contact: 'Jacob Ellery' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company D', expenses: '230,000', employees: '9', contact: 'Kate Stewart' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company E', expenses: '310,000', employees: '8', contact: 'Louise Fall' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company F', expenses: '110,000', employees: '5', contact: 'Owen Thompson' },
      height: 32,
      highlight: '',
    }, 
    {
      data: { name: 'Company G', expenses: '250,000', employees: '18', contact: 'Fred Wilton' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company H', expenses: '180,000', employees: '7', contact: 'William Dallas' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company I', expenses: '105,000', employees: '22', contact: 'Makenzie Higgs' },
      children: [
        {
          data: { name: 'Department 1', expenses: '75,000', employees: '18', contact: 'Florence Carter' },
          children: [
            {
              data: { name: 'Group alpha', expenses: '25,000', employees: '8', contact: 'Doug Moss' },
            },
            {
              data: { name: 'Group beta', expenses: '10,000', employees: '6', contact: 'Camila Devonport' },
            },
            {
              data: { name: 'Group gamma', expenses: '40,000', employees: '4', contact: 'Violet Curtis' },
            }
          ],
        },
        {
          data: { name: 'Department 2', expenses: '30,000', employees: '4', contact: 'Selena Rycroft' },
          height: 32,
          highlight: '',
        }
      ],
    },
    {
      data: { name: 'Company J', expenses: '370,000', employees: '13', contact: 'Ron Douglas' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company K', expenses: '500,000', employees: '15', contact: 'Michael Jacobs' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company L', expenses: '230,000', employees: '10', contact: 'Stephanie Egerton' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company M', expenses: '90,000', employees: '25', contact: 'Michael Buckley' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company N', expenses: '370,000', employees: '13', contact: 'Sabrina Rowlands' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company O', expenses: '500,000', employees: '15', contact: 'Lana Watt' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company P', expenses: '230,000', employees: '10', contact: 'Evelynn Calderwood' },
      height: 32,
      highlight: '',
    },
    {
      data: { name: 'Company Q', expenses: '90,000', employees: '25', contact: 'Jade Morley' },
      height: 32,
      highlight: '',
    }, 
  ];
}

const MOCK_DATA = genData();

function getById(id, myArray) {
  return myArray.filter(function(obj) {
    if(obj.data.name == id) {
      obj.data.searchValue = 'red';
      return obj 
    } else {
      obj.data.searchValue = ' ';
    }
  })[0]
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.treeTableRef = React.createRef();
    this.state = {
      treeValue: TreeState.create(MOCK_DATA)
      
    };
   
  }

  render() {
   
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to Learning React: The Course!</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );

   
      const { treeValue } = this.state;
      
      return (
<div>
        <div className="controls">
        <button onClick={this.handleScrollToGroupBeta}>Scroll to "Group Beta"</button>
        <button onClick={this.handleScrollToGroupAlpha}>Scroll to "Group Alpha"</button>
        
      </div>

        <TreeTable
            value={treeValue}
            onChange={this.handleOnChange}
            className="demo-tree-table"
            ref={this.treeTableRef}>
          <TreeTable.Column basis="180px" grow="0"
            renderCell={this.renderIndexCell}
            renderHeaderCell={() => <span>Name</span>}/>
          <TreeTable.Column
            renderCell={this.renderEditableCell}
            renderHeaderCell={() => <span>Contact person</span>}/>
          <TreeTable.Column
            renderCell={this.renderEmployeesCell}
            renderHeaderCell={() => <span className="t-right">Employees</span>}/>
          <TreeTable.Column
            renderCell={this.renderExpensesCell}
            renderHeaderCell={() => <span className="t-right">Expenses ($)</span>}/>
        </TreeTable>
        </div>
      );
    
  }

  handleOnChange = (newValue) => {
    this.setState({ treeValue: newValue });
  }

  renderNameCell = (row) => {
    return (
      <span>{row.data.name}</span>
    );
  }

  renderIndexCell = (row) => {
    return (
      <div style={{ paddingLeft: (row.metadata.depth * 15) + 'px'}}
        className={row.metadata.hasChildren ? 'with-children' : 'without-children'}>
        
        {(row.metadata.hasChildren)
          ? (
              <button className="toggle-button" onClick={row.toggleChildren}></button>
            )
          : ''
        }
        
        <span>{row.data.name}</span>
      </div>
    );
  }

  renderEmployeesCell = (row) => {
    return (
      <span className="employees-cell">{row.data.employees}</span>
    );
  }

  renderExpensesCell = (row) => {
    return (
      <span className="expenses-cell">{row.data.expenses}</span>
    );
  }

  renderEditableCell = (row) => {
    return (
      <span className="expenses-cell">{row.data.expenses}</span>
    );
  }



  handleScrollToGroupBeta = () => {
    console.log('Scroll to "Group Beta"');
    const { treeValue } = this.state;
    
    const node = getById('Company C' , MOCK_DATA); //MOCK_DATA.find(item => item.data.name === 'Department 2'); //MOCK_DATA[8].children[0].children[1];
    const rowModel = treeValue.findRowModel(node);
    rowModel.metadata.highlight = node.data.searchValue;
    if (rowModel != null) {
      this.setState({
        treeValue: TreeState.expandAncestors(treeValue, rowModel),
      }, () => {
        if (this.treeTableRef.current != null) {
          this.treeTableRef.current.scrollTo(rowModel.$state.top);
        }
      });
    }
  }

  handleScrollToGroupAlpha = () => {
    console.log('Scroll to "Group Beta"');
    const { treeValue } = this.state;

    const node = getById('Company B' , MOCK_DATA);
    const rowModel = treeValue.findRowModel(node);
    rowModel.metadata.highlight = node.data.searchValue;
    if (rowModel != null) {
      this.setState({
        treeValue: TreeState.expandAncestors(treeValue, rowModel),
      }, () => {
        if (this.treeTableRef.current != null) {
          this.treeTableRef.current.scrollTo(rowModel.$state.top);
        }
      });
    }
  }
  

}

export default App;
