import SportsCard from "@/components/SportsCard"; 
import ThemeSwitch from "@/components/ThemeSwitch";
import TicketCard from "@/components/TicketCard";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-light_bg dark:bg-dark_bg lg:py-12">
      <div className="w-full h-full max-w-[1240px] mx-auto">
        <section className="h-auto xl:h-[673px]  px-6  pt-10">
          <div className="flex justify-between items-center">
            <p className=" text-2xl font-[700] font-poppins border-b-2 border-[#738FFF] leading-[36px]">Sports</p>
            <span className="cursor-pointer">
              <ThemeSwitch />
            </span>
          </div>
          <div className="pt-6 ">
            <SportsCard />
            <div className=" pt-5 w-full flex justify-center items-center">
              <button className=" bg-[#2C9CF0] w-[125px] h-[46px] rounded-[3px] text-sm font-[600] font-inter flex justify-center items-center">See More</button>
            </div>
          </div>
        </section>
        <section className="lg:h-[60rem] p-4 md:p-8 lg:p-16 bg-light-bg-gradient dark:bg-dark-bg-gradient mt-12">
          <div className="w-full lg:w-[917px] mx-auto">
            <h1 className=" font-poppins font-bold text-2xl xxs:text-3xl sm:text-4xl lg:text-5xl pb-3 sm:pb-6 lg:pb-10 text-center">Collection Spotlight</h1>
            <p className=" font-inter text-xs xs:text-sm font-normal text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          </div>
          <TicketCard />
        </section>
      </div> 
    </main>
  );
}

export default Home;