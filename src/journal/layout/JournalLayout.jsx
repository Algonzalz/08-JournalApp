import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar} from "../components";


const drawerWith = 280;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
{/* narvar */}
<Navbar  drawerWith={drawerWith}/>
<SideBar drawerWith={drawerWith} />
{/* sidebar drawerWith */}
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            {/* toolbar */}
            <Toolbar/>
            {children}

        </Box>
    </Box>
  )
}
