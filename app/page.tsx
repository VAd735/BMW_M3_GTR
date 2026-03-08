"use client";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-100 to-gray-200 font-sans text-gray-900">
       <div>
        <div className="left-section"> Bartashchuk Vadym; album: 124402</div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-blue-900 drop-shadow-lg">
          BMW M3 E46 GTR
        </h1>

        {/* Zdjęcie 1 */}
        <div className="flex justify-center mb-10">
         <div className="shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/qqwjt.png"
            alt="BMW M3 GTR"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </div>


        {/* Opis */}
        <section className="mb-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-3xl font-semibold mb-3 border-b pb-1 border-gray-300">Description</h2>
          <p>
            The BMW M3 E46 GTR is a legendary car designed for racing. The road version was produced in very limited numbers,
            mainly to meet homologation requirements. This car combines aggressive looks, low weight, and a powerful V8 engine.
          </p>
        </section>

        {/* Historia */}
        <section className="mb-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-3xl font-semibold mb-3 border-b pb-1 border-gray-300">History</h2>
          <p>
          The BMW M3 E46 GTR was born not just as another “charged race car,” but as BMW's response to fierce competition in motorsports in the early 21st century. In 2001, the company decided to challenge Porsche in the prestigious American Le Mans Series (ALMS). The standard inline six-cylinder M3 engine was no longer able to cope with the demands of the track, so engineers developed a new racing monster - the 4.0-liter P60B40 V8 engine, which became the heart of the GTR.
          But in order to compete in accordance with FIA regulations, it was necessary to create at least 10 road versions of this car - this is how the M3 GTR Straßenversion (street version) was created. They were very similar to the racing version, but had a more “civilian” interior. It was this rarity and connection to racing that made the car a legend among BMW fans.
          After the 2001 season, the regulations changed, requiring mass production of road versions, which BMW refused to do. As a result, the M3 GTR survived only one season in motorsport, but that was enough to leave an indelible mark on history.
          </p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-3xl font-semibold mb-3 border-b pb-1 border-gray-300">In video games</h2>
          <p >
          Pop culture made this car truly immortal, primarily thanks to the video game Need for Speed: Most Wanted (2005).
          In this game, the BMW M3 GTR was the protagonist's main car, with its distinctive white and blue paint job and aggressive body kit.
          The player started the game behind the wheel of this car, but it was taken away – and the entire plot was built around the return of the GTR.
          The car became a visual icon – it is recognizable even to those who are not fans of BMW or car simulators.
          It then appeared in many other parts of the series:
          Need for Speed: Carbon
          Need for Speed: World
          Need for Speed: Heat (As a car that pays homage to the original GTR)
          </p>
        </section>

        {/* Zdjęcie 2 */}
        <div className="flex justify-center mb-10">
         <div className="shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
           src="/zxqw.png"
           alt="BMW M3 GTR"
           width={800}
           height={600}
           className="rounded-lg shadow"
          />
        </div>
      </div>

        {/* Charakterystyka */}
        <section className="mb-16 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-3xl font-semibold mb-3 border-b pb-1 border-gray-300">Characteristics</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Engine: 4.0L V8 (P60B40)</li>
            <li>Power: around 500 HP (racing version)</li>
            <li>0–100 km/h: ~3.9 s</li>
            <li>Drive: rear-wheel drive</li>
            <li>Weight: around 1100 kg (racing version)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
