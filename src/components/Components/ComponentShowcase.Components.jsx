import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

import Avatar from "./Avatar.Components";
import Button from "./Button.Components";
import Card from "./Card.Components";
import Dropdown from "./Dropdown.Components";
import Input from "./Input.Components";
import Modal from "./Modal.Components";
import Navbar from "../Navbar/Navbar";
import Table from "./Table.Components";
import Tabs from "./Tabs.Components";
import ProgressBar from "./ProgressBar.Components";
import Alert from "./Alert.Components";
import Divider from "./Divider.Components";
import Breadcrumb from "./Breadcrumb.Components";
import Checkbox from "./Checkbox.Components";
import Grid from "./Grid.Components";
import Radio from "./Radio.Components";
import Slider from "./Slider.Components";

import avatarComponentData from "../../utils/Avatar.utils";
import cardComponentData from "../../utils/Card.utils";
import buttonComponentData from "../../utils/Button.utils";
import dropdownComponentData from "../../utils/Dropdown.utils";
import inputComponentData from "../../utils/Input.utils";
import modalComponentData from "../../utils/Modal.utils";
import navbarComponentData from "../../utils/Navbar.utils";
import tableComponentData from "../../utils/Table.utils";
import tabsComponentData from "../../utils/Tabs.utils";
import progressBarComponentData from "../../utils/ProgressBar.utils";
import alertComponentData from "../../utils/Alert.utils";
import dividerComponentData from "../../utils/Divider.utils";
import breadcrumbComponentData from "../../utils/Breadcrumb.utils";
import checkboxComponentData from "../../utils/Checkbox.utils";
import gridComponentData from "../../utils/Grid.utils";
import radioComponentData from "../../utils/Radio.utils";
import sliderComponentData from "../../utils/Slider.utils";

const components = [
  alertComponentData,
  avatarComponentData,
  breadcrumbComponentData,
  buttonComponentData,
  cardComponentData,
  checkboxComponentData,
  dividerComponentData,
  dropdownComponentData,
  gridComponentData,
  inputComponentData,
  modalComponentData,
  navbarComponentData,
  sliderComponentData,
  tableComponentData,
  tabsComponentData,
  progressBarComponentData,
  radioComponentData,
];

const componentMap = {
  Avatar,
  Alert,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Grid,
  Input,
  Modal,
  Navbar,
  Slider,
  Table,
  Tabs,
  ProgressBar,
  Radio,
};

function ComponentShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  const [copyButtonText, setCopyButtonText] = useState("Copy Code");
  const [isCopied, setIsCopied] = useState(false);

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderComponent = (Component) => {
    if (Component) {
      return React.createElement(Component);
    }
    return null;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedComponent.code);
    setCopyButtonText("Copied");
    setIsCopied(true);
    setTimeout(() => {
      setCopyButtonText("Copy Code");
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-1/5 bg-gray-100 p-4 overflow-y-auto">
          <input
            type="text"
            name="search"
            placeholder="Search for component"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredComponents.map((component, index) => (
              <li
                key={index}
                className={`p-2 font-semibold cursor-pointer rounded-md transform transition duration-300 ease-out ${
                  selectedComponent.name === component.name
                    ? "text-black font-bold bg-gray-100 shadow-md my-2"
                    : "text-gray-400 hover:bg-gray-100 hover:shadow-md hover:scale-105 hover:text-black hover:font-semibold"
                }`}
                onClick={() => setSelectedComponent(component)}
              >
                {component.name}
              </li>
            ))}
          </ul>
        </aside>
        <main className="w-4/5 p-4 flex flex-col">
          <div className="flex-1 mb-4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2">
              {selectedComponent.name} Component Preview
            </h2>
            <div className="border rounded-md p-4 mb-4 overflow-y-auto">
              {renderComponent(componentMap[selectedComponent.name])}
            </div>
            <div className="relative border px-4 overflow-y-auto bg-gray-700 rounded">
              <div className="flex flex-col">
                <div className="w-full h-12">
                  <button
                    className="absolute top-2 right-2 mr-2 flex items-center py-2 px-4 bg-gray-200 text-gray-600 rounded shadow-md hover:bg-gray-300 focus:outline-none"
                    onClick={handleCopy}
                  >
                    {isCopied ? (
                      <MdCheck className="text-lg mr-2 text-green-500" />
                    ) : (
                      <MdContentCopy className="text-lg mr-2" />
                    )}
                    <span>{copyButtonText}</span>
                  </button>
                </div>
                <div>
                  <SyntaxHighlighter language="jsx" style={solarizedDarkAtom}>
                    {selectedComponent.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ComponentShowcase;
