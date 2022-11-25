import { motion } from "framer-motion";
import React from "react";
import { planDetails } from "../../data/planDetails";
import MembershipPlan from "./MembershipPlan";
import Terms from "./Terms";

const MembershipPlans = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-4 p-5">
      <div className='uppercase text-2xl tracking-[2px] font-[650] scale-x-90 text-[#de1245] before:content-["—___"] after:content-["___—"]'>
        Step 2
      </div>
      <div className="text-5xl text-[#222] scale-x-75 font-bold text-center tracking-wider">
        Select a Membership
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3 justify-center items-center">
        {planDetails.map((plan) => (
          <motion.div key={plan.plan}>
            <MembershipPlan {...plan} />
          </motion.div>
        ))}
      </div>
      <Terms />
    </div>
  );
};

export default MembershipPlans;
