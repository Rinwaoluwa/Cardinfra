import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Building,
  UserShield,
  UserGroup,
  CardScheme,
  CreditCardAccept,
  ChartbarLine,
  CreditCard,
  CreditCardPos,
  CreditCardNotFound,
  List,
  Queue,
  Map,
  User,
  Logout,
  CardinfraLogo,
  LapoLogo
} from "./svgs"
import { useIsMobile } from "../hooks/use-mobile"

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    };
  }, [isMobile])

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Branches", icon: Building },
    { name: "Roles", icon: UserShield },
    { name: "Users", icon: UserGroup },
    { name: "Card Scheme", icon: CardScheme },
    { name: "Card Profile", icon: CreditCardPos },
    { name: "Card Request", icon: CreditCardAccept },
    { name: "Stock", icon: ChartbarLine },
    { name: "Cards", icon: CreditCard },
    { name: "Block/Unblock Card", icon: CreditCardNotFound },
    { name: "Authorization List", icon: List },
    { name: "Authorization Queue", icon: Queue },
    { name: "Trail", icon: Map },
    { name: "Account", icon: User },
  ]

  return (
    <motion.div
      className={`h-screen bg-blue-900 text-white flex flex-col ${isCollapsed ? "w-20" : "w-64"}`}
      animate={{ width: isCollapsed ? "5rem" : "16rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo */} {/* Collapse Toggle */}
      <button
        className="p-4 flex justify-center items-center"
        onClick={() => {
          // do not allow expanding sidebar on mobile devices.
          if (isMobile === false) {
            setIsCollapsed(!isCollapsed);
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          {isCollapsed && (
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-orange-400 text-xs font-bold">L</span>
            </div>
          )}
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="ml-2 text-orange-400 font-bold text-xl"
            >
              <LapoLogo />
            </motion.span>
          )}
        </motion.div>
      </button>

      {/* Dashboard Button */}
      <div className="px-4 mb-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveItem("Dashboard")}
          className={`w-full py-2.5 px-4 rounded-md flex items-center ${activeItem === "Dashboard" ? "bg-white text-blue-900" : "text-white hover:bg-blue-800"
            } transition-colors duration-200`}
        >
          <Home />
          {!isCollapsed && <span className="ml-3">Dashboard</span>}
        </motion.button>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto">
        {!isCollapsed && (
          <div className="px-6 py-2">
            <span className="text-xs text-gray-400 font-semibold">MAIN MENU</span>
          </div>
        )}

        <div className="px-4">
          <AnimatePresence>
            {menuItems.slice(1).map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveItem(item.name)}
                className={`w-full py-2.5 px-4 my-1 rounded-md flex items-center ${activeItem === item.name ? "bg-blue-800 text-white" : "text-white"
                  } transition-colors duration-200`}
              >
                <item.icon />
                {!isCollapsed && <span className="ml-3 truncate">{item.name}</span>}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 mt-auto">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 px-4 rounded-md flex items-center text-white"
        >
          <Logout />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </motion.button>
      </div>

      {/* Powered By */}
      <div className="p-4 text-xs text-gray-400">
        {!isCollapsed && (
          <>
            <div className="mb-4">POWERED BY</div>
            <CardinfraLogo />
          </>
        )}
      </div>
    </motion.div>
  )
}
