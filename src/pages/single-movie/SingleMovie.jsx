import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '@/hooks/useFetch'
import MovieView from '@/components/movie-view/MovieView'
import { IoStar } from "react-icons/io5";
import { TbFileSad } from "react-icons/tb";

const url = import.meta.env.VITE_IMAGE_URL

const SingleMovie = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch(`/movie/${id}`)
  const { data: images } = useFetch(`/movie/${id}/images`)
  const { data: similars } = useFetch(`/movie/${id}/similar`)

  useLayoutEffect(() => {
    scrollTo(0, 0)
  }, [id])

  return (
    <div className="text-white bg-black  min-h-screen mx-5 ">
      <div className="w-full">
        <img
          src={url + data?.backdrop_path}
          alt=""
          className="w-full max-h-[600px] object-cover rounded-[12px] transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-primary">{data?.title}</h1>
          <p className="text-[24px] text-gray-300">{data?.tagline}</p>
          <p className="text-md text-gray-400 leading-relaxed">{data?.overview}</p>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 flex items-center gap-1 text-yellow-400 rounded bg-[#1D1D1D]">
              Rating: {data?.vote_average.toFixed(1)}
              <IoStar className='text-[17px] text-yellow-400'/>
            </div>
            <div className="px-4 py-2 rounded bg-[#1D1D1D]">
              Runtime: {
                data?.runtime &&
                `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
              }
            </div>
            <div className="px-4 py-2 rounded bg-[#1D1D1D]">
              Budget: {data?.budget?.toLocaleString()} USD
            </div>
            <div className="px-4 py-2 rounded bg-[#1D1D1D]">
              Release Date: {
                data?.release_date &&
                new Date(data.release_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Genres</h3>
            <div className="flex gap-2 flex-wrap">
              {data?.genres?.map((genre) => (
                <span key={genre.id} className="px-3 py-1 bg-primary rounded text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Spoken Languages</h3>
            <div className="flex gap-2 flex-wrap">
              {data?.spoken_languages?.map((lang) => (
                <span key={lang.iso_639_1} className="bg-gray-700 px-3 py-1 rounded text-sm">
                  {lang.english_name}
                </span>
              ))}
            </div>
          </div>

          

        <div className="space-y-2">
        <h3 className="text-xl font-semibold">Production Companies</h3>
        <ul className="flex flex-col gap-[2px] text-sm text-gray-400">
            {data?.production_companies?.map((company) => (
            <li key={company.id} className="flex items-center gap-4">
                <span className='flex items-center justify-center gap-1 ' > <p className='text-3xl mb-1'>·</p> {company.name}</span>
                {company.logo_path && (
                <img
                    src={url + company.logo_path}
                    alt={company.name}
                    className="h-5 object-contain bg-white"
                />
                )}
            </li>
            ))}
        </ul>
        </div>



          {/* <div className="space-y-2">
            <h3 className="text-xl font-semibold">Production Companies</h3>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {data?.production_companies?.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div> */}

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Production Countries</h3>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {data?.production_countries?.map((country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              ))}
            </ul>
          </div>

          <a
            href={data?.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary px-6 py-3 rounded text-white font-semibold"
          >
            Visit Official Site
          </a>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images?.backdrops?.slice(0, 15).map((item) => (
              <img
                key={item.file_path}
                src={url + item.file_path}
                alt=""
                className="w-full h-32 object-cover rounded transition-transform duration-300 hover:scale-[1.1]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pb-16 pt-5">
        <div className='container mx-auto mb-8'>
            <hr className='border-[1px] border-[#2D2D2D]' />
        </div>
        <h3 className="container mx-auto text-3xl font-bold mb-6 text-white">Similar Movies</h3>
        {
          similars?.results?.length > 0 ? (
            <MovieView movies={similars?.results.slice(0, 8)} />
          ) : (
            <h3 className="container mx-auto text-[16px] flex flex-col gap-2 items-center justify-center font-bold mb-6 text-[#4D4D4D]">No Similar Movies Found!<TbFileSad className='text-[#4D4D4D] text-4xl' /></h3>
          )
        }
      </div>
    </div>
  )
}

export default SingleMovie
