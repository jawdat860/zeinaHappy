import React, { useState } from "react";
import { Modal, VisuallyHidden } from "@telegram-apps/telegram-ui";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FiAlignJustify } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import { IoIosArrowDropupCircle } from "react-icons/io";
const ModelLink = ({ services }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close
  const [openDropdown, setOpenDropdown] = useState(null); // State to control which dropdown is open

  const handleLinkClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(false); // Close modal after clicking on the link
  };

  const toggleDropdown = (categoryId) => {
    // Toggle the dropdown for the clicked category
    setOpenDropdown((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <Modal
      header={<ModalHeader style={{ backgroundColor: "transparent" }}>Service Categories</ModalHeader>}
      dismissible={true}
      trigger={
        <button
          className="mx-[6px] px-4 py-2 text-sm font-medium bg-[#ffc001] text-white rounded-full transition-all duration-300 active:bg-primary active:opacity-50 focus:outline-none"
        >
          <FiAlignJustify />
        </button>
      }
      open={isModalOpen} // Control modal state
      onOpenChange={(open) => setIsModalOpen(open)} // Handle modal open/close
      style={{
        backgroundColor: "transparent",
        bottom: "0",
        display: "flex",
        alignContent: "space-between",
        minHeight: "100%",
      }}
    >
      <DialogTitle>
        <VisuallyHidden>Service List</VisuallyHidden>
      </DialogTitle>

      <div className="p-4 mt-[40px] flex-[1] text-black overflow-scroll ">
        <ul className="space-y-2 h-full flex flex-col  ">
          {services.length > 0 ? (
            services.map((service) => (
              <li key={service.id} className="border-b-[2px] p-2">
                {service.subcategories && service.subcategories.length > 0 ? (
                  <>
                   <button
                      onClick={() => toggleDropdown(service.id)} // Toggle dropdown on button click
                      className="text-black flex items-center  w-[100%] cursor-pointer"
                    >
                      <span className="mr-[7px]">{service.title}</span>
                      <IoIosArrowDropupCircle />
                    </button>
                    {openDropdown === service.id && (
                      <ul className=" bg-gray-100 p-2 rounded ">
                        {service.subcategories.map((subcategory) => (
                          <li key={subcategory.id} className="border-b-[2px] p-1">
                            <ScrollLink
                              to={subcategory.id} // Target the element with the subcategory.id
                              smooth={true} // Enable smooth scrolling
                              duration={500} // Duration of scroll animation
                              offset={-100} // Optional: Offset the scroll position (e.g., for sticky headers)
                              className="text-black  cursor-pointer"
                              onClick={handleLinkClick} // Close modal on click
                            >
                              {subcategory.title}
                            </ScrollLink>
                          </li>
                        ))}
                      </ul>
                    )}
                     
                  </>
                ) : (
                  <ScrollLink
                    to={service.id} // Target the element with the service.id
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Duration of scroll animation
                    offset={-100} // Optional: Offset the scroll position (e.g., for sticky headers)
                    className="text-black hover:underline cursor-pointer"
                    onClick={handleLinkClick} // Close modal on click
                  >
                    {service.title}
                  </ScrollLink>
                )}
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
        </ul>
      </div>
    </Modal>
  );
};

export default ModelLink;
