import { type NextPage } from "next";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
const randomWheel: NextPage = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <>
      <p>random wheel page</p>
      <button className="btn">Button</button>
      <select data-choose-theme className="select select-primary w-30 max-w-xs">
        <option value="cmyk">Default</option>
        <option value="dark">Dark</option>
        <option value="autumn">autumn</option>
        <option value="business">business</option>
        <option value="acid">acid</option>
        <option value="lemonade">lemonade</option>
        <option value="night">night</option>
        <option value="coffee">coffee</option>
        <option value="winter">winter</option>
      </select>

    </>
  )
}
export default randomWheel;
