import { motion, Variants } from "motion/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  state: boolean;
}

export const Node = ({ state, ...props }: Props) => {
  return (
    <div {...props} className="square">
      <motion.div
        animate={state ? "initial" : "animate"}
        variants={variants}
        className="node"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          width={100}
          height={40}
        >
          <motion.path
            custom={false}
            variants={stroke}
            className="pathfill1"
            d="M0 20 L20 0 L 80 0 M 0 20 Z"
          />
          <motion.path
            custom={false}
            variants={stroke}
            className="pathfill2"
            d="M100 20 L80 40 L20 40 M100 20 Z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export const VertNode = ({ state, ...props }: Props) => {
  const vert = true;
  return (
    <div {...props} className="square">
      <motion.div
        animate={state ? "initial" : "animate"}
        custom={vert}
        variants={variants}
        className="node vertnode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          width={100}
          height={40}
        >
          <motion.path
            custom={vert}
            variants={stroke}
            className="pathfill1"
            d="M20 0 L 80 0 L100 20 M 20 0 Z"
          />
          <motion.path
            custom={vert}
            variants={stroke}
            className="pathfill2"
            d="M80 40 L20 40 L0 20 M80 40 Z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

const variants: Variants = {
  initial: (vert) => ({
    background: [
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 0%,#504F4Fff 0%,#504F4Fff 100%)`,
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 0%,#313131ff 0%,#313131ff 100%)`,
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 0%,#232323ff 0%,#232323ff 100%)`,
    ],
    transition: { duration: 0.3 },
  }),
  animate: (vert) => ({
    background: [
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 0%,#232323ff 0%,#232323ff 100%)`,
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 0%,#232323ff 50%,#232323ff 100%)`,
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 50%,#313131ff 100%,#313131ff 100%)`,
      `linear-gradient(${
        vert ? "1.25turn" : "1turn"
      },#85838400 100%,#504F4Fff 100%,#504F4Fff 100%)`,
    ],
    transition: { duration: 0.22 },
  }),
};

const stroke: Variants = {
  initial: { strokeWidth: "0px", filter: "blur(4px)" },
  animate: {
    strokeWidth: ["12px", "0px"],
    filter: "blur(2px)",
    transition: { delay: 0.25, duration: 0.2 },
  },
};

export default Node;
