import { Box, Grid } from "@mui/material";
import TopBar from "../../components/topbar/Topbar";





export default function VideoViewPage() {
  return (
      <div className="grid h-screen w-screen grid-rows-[auto,1fr] grid-cols-[2fr,1fr] gap-0">
        {/* Top Horizontal Section */}
        <div className="bg-red-300 col-span-2">
            <TopBar/>
        </div>

        <div className="grid">
            <div>
                <iframe style={{borderRadius:8}} width="100%" height="100%" src="https://www.youtube.com/embed/cFBQe45hhOs?autoplay=1" title="Learn English and  French with Esther on italki" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                afasdfsdfad
            </div>
        </div>
        <div className="bg-orange-600">
                asdfasdfasdf
        </div>


      </div>

  )
}




