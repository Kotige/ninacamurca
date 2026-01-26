export default function ServiceTitle({title}) {
    return (
        <section className="flex justify-center md:justify-start md:ml-40 md:mt-20 py-5">
            <h1 className="mt-16 text-2xl w-fit py-2 px-8 rounded-r-[15px] bg-[#5A4A3B] text-[#F2E6D8]">
                {title}
            </h1>
        </section>
    )
}