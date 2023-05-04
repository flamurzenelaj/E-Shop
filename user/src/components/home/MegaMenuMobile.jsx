import React, { Component, Fragment } from 'react'
import "../../assets/css/megaMenuMobile.css"

export class MegaMenuMobile extends Component {

    constructor() {
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();
    }

    MegaMenu() {
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        var i;
        for (i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active")
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
    }

    render() {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionoMenuDivInsideMobile">

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile" src="" /> &nbsp; Men's Clothing
                    </button>

                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default MegaMenuMobile
