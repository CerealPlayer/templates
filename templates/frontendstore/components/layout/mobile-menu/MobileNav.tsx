import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import Badge from "../../UI/notifications/Badge";

const navVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function NavItem({ children }: { children: ReactNode }) {
  return (
    <motion.li className="text-2xl w-24 text-center" variants={itemVariants}>
      {children}
    </motion.li>
  );
}

export default function MobileNav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <motion.ul
      variants={navVariants}
      className="absolute top-40 w-56 z-40 left-1/2 -translate-x-1/2 flex flex-col justify-center gap-8 items-center"
    >
      <NavItem>Trending</NavItem>
      <NavItem>On Sale</NavItem>
      <NavItem>
        <Badge>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </Badge>
      </NavItem>
      <NavItem>
        {!isLoggedIn && (
          <Link href="/login">
            <a>Log in</a>
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/account">
            <a>My account</a>
          </Link>
        )}
      </NavItem>
    </motion.ul>
  );
}
