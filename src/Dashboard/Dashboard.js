import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import CardContainer from "../CardContainer/CardContainer";
import axios from "../axios.database";
import {convertDatabaseObjectIntoArray} from '../utils/utils';

class Dashboard extends Component {
  state = {
    nodes: null,
  };
 
  componentDidMount() {

    const queryUrl = `/temperatura.json`;
    axios.get(queryUrl).then((response) => {
      const nodes = convertDatabaseObjectIntoArray(response.data);
        this.setState({
          nodes: nodes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let data = [];
    for (const node in this.state.nodes) {
      data.push([node, this.state.nodes[node]]);
    }
    return (
      <div>
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Temperatures
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-none border-gray-200 rounded-lg h-96 OUTER_COMPONENT">
                <CardContainer data={data}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
