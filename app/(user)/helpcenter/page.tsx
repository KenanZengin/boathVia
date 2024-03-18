"use client"

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Help from "@/public/img/basic/help.png"
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';



const HelpCnter = () => {


    const [activeKey, setActiveKey] = useState<AccordionEventKey>();
    const [show,setShow] = useState<boolean>(false)
    const [show2,setShow2] = useState<boolean>(false)
    const [search,setSearch] = useState<string>("");
   

    interface QuestionProps{
        category: string,
        subcategory:string,
        question:string,
        eventKey:string
    }
    
    const questions: QuestionProps[] = [
        {
            "category": "Visitors",
            "subcategory": "Account Management",
            "question": "How can I change my password?",
            "eventKey": "0",
        },
        {
            "category": "Visitors",
            "subcategory": "Account Management",
            "question": "I forgot my password, what can I do?",
            "eventKey": "1",
        },
        {
            "category": "Visitors",
            "subcategory": "Account Management",
            "question": "How can I register?",
            "eventKey": "12",
        },
        {
            "category": "Visitors",
            "subcategory": "Account Management",
            "question": "How can I turn off email notifications?",
            "eventKey": "13",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "Something is damaged on the boat, what should I do?",
            "eventKey": "5",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "We had a dispute with the Boat Owner, what should I do?",
            "eventKey": "6",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "What should I do if there is no boat whose details are shared in Teknevia when I go to the boat?",
            "eventKey": "55",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "May I cancel my reservation?",
            "eventKey": "66",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "May I change my reservation? How can I do that?",
            "eventKey": "51",
        },
        {
            "category": "Visitors",
            "subcategory": "Cancellation Conditions",
            "question": "Can I cancel my rental because of the weather?",
            "eventKey": "61",
        },
        {
            "category": "Visitors",
            "subcategory": "General Information",
            "question": "What is Teknevia?",
            "eventKey": "62",
        },
        {
            "category": "Visitors",
            "subcategory": "General Information",
            "question": "Is Teknevia a travel agency?",
            "eventKey": "8",
        },
        {
            "category": "Visitors",
            "subcategory": "General Information",
            "question": "Is Teknevia safe?",
            "eventKey": "71",
        },
        {
            "category": "Boat Owners",
            "subcategory": "Account Management",
            "question": "How do I open a partner account?",
            "eventKey": "3",
        },
        {
            "category": "Boat Owners",
            "subcategory": "Account Management",
            "question": "How can I change my password?",
            "eventKey": "4",
        },
        {
            "category": "Boat Owners",
            "subcategory": "Account Management",
            "question": "I forgot my password, what can I do?",
            "eventKey": "31",
        },
        {
            "category": "Reservation Process",
            "subcategory": "Account Management",
            "question": "Can I rent a boat by the hour?",
            "eventKey": "9",
            
        },
        {
            "category": "Reservation Process",
            "subcategory": "Account Management",
            "question": "How does the reservation process work?",
            "eventKey": "10",
        }
    ];

    const activeAccordion = (key:string) => {

        setSearch("");
        setActiveKey(key);
        setShow2(false);
        setShow(false);
    }
    
    
    const onSelect = (eventKey: AccordionEventKey  ) => {
        
        if (eventKey !== activeKey) {
          setActiveKey(eventKey);
        }
        setShow(false)

    };

    const filterQuestions = (questions: QuestionProps[], search: string) => {

        if (!search) {
            return "No articles found";
        }
      
        const filteredQuestions = questions.filter((question:QuestionProps) =>
          question.question.toLowerCase().includes(search.toLowerCase())
        );
      
        if (filteredQuestions.length === 0) {
          return "No articles found";
        }
      
        return filteredQuestions;
    }
    
    const filteredQuestions = filterQuestions(questions, search);


  return (
   <div className="helpcenter">
        <section className='search-area'>
        <div className="abso-img">
            <span>
                <Image src={Help} alt="HomePage Image" />
            </span>
        </div>
        <div className="searching">
            <h1 className="title">
                Teknevia Help Center
            </h1>
            <label htmlFor="help" >
                <input 
                    type="text" 
                    id='help' 
                    placeholder='Search on help articles'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    onClick={() => {setShow(!show);setShow2(true)}}
                />

                {show && show2 && (
                    <div className="search-list">
                        <div className="helps">
                        {filteredQuestions === "No articles found"  ? (
                            <span>{filteredQuestions}</span>
                            ) : (
                            filteredQuestions.map((question:QuestionProps, i:number) => (
                               
                                <Link  href={`#${question.eventKey}`} key={i} onClick={() => activeAccordion(question.eventKey)}>{question.question}</Link>
                              
                            ))
                        )}
                        </div>
                    </div>
                )}
            </label>
           
        </div>
        </section>
        <div className="questions">
            <div className="questions-card">
                <Accordion activeKey={activeKey} onSelect={onSelect}>
                    <div className="accordion-head">
                        <span className="user-type">
                            Visitors
                        </span>
                        <h2>
                            Account Management
                        </h2>
                    </div>
                    <Accordion.Item eventKey="0" id='0'>
                        <Accordion.Header>
                            How can I change my password?
                        </Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" id="1">
                        <Accordion.Header>I forgot my password, what can I do?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12" id="12">
                        <Accordion.Header>How can I register?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13" id="13">
                        <Accordion.Header>How can I turn off email notifications?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="questions-card">
            <Accordion activeKey={activeKey} onSelect={onSelect}>
                <div className="accordion-head">
                    <span className="user-type">
                    Boat Owners
                    </span>
                    <h2>
                        Account Management
                    </h2>
                </div>
                <Accordion.Item eventKey="3" id='3'>
                    <Accordion.Header>How do I open a partner account?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" id='4'>
                    <Accordion.Header>How can I change my password?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="31" id='31'>
                    <Accordion.Header>I forgot my password, what can I do?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            
            </Accordion>
            </div>
            <div className="questions-card">
            <Accordion activeKey={activeKey} onSelect={onSelect}>
                <div className="accordion-head">
                    <span className="user-type">
                        Visitors
                    </span>
                    <h2>
                        Cancellation Conditions
                    </h2>
                </div>
                <Accordion.Item eventKey="5" id='5'>
                    <Accordion.Header>Something is damaged on the boat, what should I do?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" id='6'>
                    <Accordion.Header>We had a dispute with the Boat Owner, what should I do?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="55" id='55'>
                    <Accordion.Header>What should I do if there is no boat whose details are shared in Teknevia when I go to the boat?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="66" id='66'>
                    <Accordion.Header>May I cancel my reservation?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="51" id='51'>
                    <Accordion.Header>May I change my reservation? How can I do that?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="61" id='61'>
                    <Accordion.Header>I can&apos;t catch the boat I rented, how can I cancel?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div className="questions-card">
            <Accordion activeKey={activeKey} onSelect={onSelect}>
                <div className="accordion-head">
                    <span className="user-type">
                        Visitors
                    </span>
                    <h2>
                        General Information
                    </h2>
                </div>
                <Accordion.Item eventKey="7" id='7'>
                    <Accordion.Header>What is Teknevia?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8" id='8'>
                    <Accordion.Header>Is Teknevia a travel agency?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="71" id='71'>
                    <Accordion.Header>Is Teknevia safe?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div className="questions-card">
            <Accordion activeKey={activeKey} onSelect={onSelect}>
                <div className="accordion-head">
                    <span className="user-type">
                        Visitors
                    </span>
                    <h2>
                        Reservation Process
                    </h2>
                </div>
                <Accordion.Item eventKey="9" id='9'>
                    <Accordion.Header>Can I rent a boat by the hour?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10" id='10'>
                    <Accordion.Header>How does the reservation process work?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
   </div>
  )
}

export default HelpCnter
