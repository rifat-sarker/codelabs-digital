import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Questions = () => {
  return (
    <div>
       <button className="border border-[#4D4C7B] py-2 px-6 rounded-3xl text-[#020043]">
        Faq
      </button>
      <h3 className="text-[#020043] font-bold text-4xl py-4">Frequntly Asked Question</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-semibold text-[#020043] bg-[#FFFFF5] text-xl"
        >
           What are your office hours?
        </AccordionSummary>
        <AccordionDetails className="text-[#343268] opacity-80">
        Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="font-semibold text-[#020043] bg-[#FFFFF5] text-xl"
        >
          How can I schedule an appointment?
        </AccordionSummary>
        <AccordionDetails className="text-[#343268] opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="font-semibold text-[#020043] bg-[#FFFFF5] text-xl"
        >
          Do you accept insurance?
        </AccordionSummary>
        <AccordionDetails className="text-[#343268] opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel3-header"
          className="font-semibold text-[#020043] bg-[#FFFFF5] text-xl"
        >
          What should I bring to my appointment?
        </AccordionSummary>
        <AccordionDetails className="text-[#343268] opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel3-header"
          className="font-semibold text-[#020043] bg-[#FFFFF5] text-xl"
        >
          Do you offer telemedicine appointments?
        </AccordionSummary>
        <AccordionDetails className="text-[#343268] opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Questions;
