import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import React, {useEffect} from "react";
import Modal from 'react-modal';

import { linkResolver } from "../prismicio";

export const Menu = ({ navigation}) => {

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			width: '100vw',
			height: '100vh',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#ddbfbf',
			zIndex: '999',
		},
	};

	const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

	function closeAfterClick(){
		setTimeout(setIsOpen(false), 3000);
	}

  return (
    <div className="mobile-menu">
			<div onClick={openModal} className="hamburger"></div>
			<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
				<div className="close" onClick={closeModal}>X</div>
				<div className="nav-links">
					 {navigation.data?.links.map((item) => (
            <a href={`/${item.link.uid}`}  key={prismicH.asText(item.label)}>
              <PrismicText field={item.label} />
            </a>
          ))}
				</div>
				
			</Modal>
    </div>
  );
};
