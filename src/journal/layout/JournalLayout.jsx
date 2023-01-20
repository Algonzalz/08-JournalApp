import { Box } from "@mui/material"
import { Navbar } from "../components/Navbar";


const drawerWith = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
{/* narvar */}
<Navbar  drawerWith={drawerWith}/>
{/* sidebar drawerWith */}
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            {/* toolbar */}
            {children}

        </Box>
    </Box>
  )
}
