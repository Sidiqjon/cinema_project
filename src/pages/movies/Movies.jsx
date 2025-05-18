import Genres from '@/components/genres/Genres'
import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import React, { useCallback, useLayoutEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import { useSearchParams} from 'react-router-dom'

const Movies = () => {
  const [params, setParams] = useSearchParams()
  let page = params.get("page") || 1
  let genres = params.get("genres") || ""
  let with_genres = genres.split("-").join(",").slice(1)
  
  let {data,error,loading} = useFetch("/discover/movie", {page, with_genres, without_genres: "18,10749,36"})

  const handleChangeGenre = useCallback((id)=>{
    let array = genres.split("-")
    if(array.includes(id)){
      genres = array.filter((i) => i !== id).join("-")
    }else {
      genres += `-${id}`
    }

    params.set("page", "1")
    if(!genres){
      params.delete("genres")
      // params.delete("page")
    }else{
      params.set("genres", genres)
    }
    setParams(params)
  }, [])
  
  const handleChange = (_, value) => {
    if (value === 1){
      params.delete("page")
    }else{
      params.set("page", value.toString())
    }
    setParams(params)
  }

    useLayoutEffect(() => {
        scrollTo(0, 0)
    }, [page])

  return (
    <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre}/>
      {loading ? <Skeleton count={20}/> :  <MovieView movies={data?.results}/>}

      <div className='container mx-auto flex justify-center my-10'>

        <Pagination
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          page={Number(page)}
          onChange={handleChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#c61f1f',
              margin: {
                xs: '2px',
                sm: '4px',
                md: '6px',
              },
              minWidth: {
                xs: 28,
                sm: 32,
                md: 36,
              },
              height: {
                xs: 28,
                sm: 32,
                md: 36,
              },
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
              },
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#c61f1f',
              color: 'white',
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
            '& .MuiPaginationItem-root.Mui-selected:hover': {
              backgroundColor: 'rgba(250, 31, 31, 0.5)',
            },
          }}
        />
      </div>
    </div>
  )
}

export default Movies
