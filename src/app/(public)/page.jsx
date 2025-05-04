import { Sections } from "@/components/sections/sections"
import { getPageBySlug } from "@/sanity/lib/api"


const HomePage = async () => {


  const pageResult = await getPageBySlug('/')

  return (
    <div>
      <Sections sections={pageResult.sections}/>
    </div>
  )
}
export default HomePage