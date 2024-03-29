import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="px-5 bg-1">
        <NavbarBrand>
          <Link className="text-light" to="/alstack">
            Alstack
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>
                <Link className="text-light" to="/alstack">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-light" to="/alstack/bubbleSort">
                  Bubble Sort
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-light" to="/alstack/insertionSort">
                  {" "}
                  Insertion Sort
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-light" to="/alstack/selectionSort">
                  Selection Sort
                </Link>{" "}
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink>
                {" "}
                <Link className="text-light" to="/alstack/binarySearchTree">
                  Binary Search Tree
                </Link>{" "}
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
