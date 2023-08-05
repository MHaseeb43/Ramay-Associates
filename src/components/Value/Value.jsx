import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md"
import "./value.css";
import data from "../../utils/accordion"
import { motion, spring } from 'framer-motion';

const Values = () => {
    const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left Side */}
                <div className="v-left">
                    <motion.div
                        initial={{ rotate: 270, opacity: 0 }}
                        animate={{ rotate: 360, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: spring
                        }}
                        className="image-container">
                        <img src='./value.png' alt='' />
                    </motion.div>
                </div>

                {/* Right Side */}

                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we Give to you</span>
                    <span className='secondaryText'>We always readt to help bu provding the best services for you <br />
                        We believe a good balance to live can make youe life better
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >{
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionButton flexCenter'>

                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>

                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Values
