import { useJsonFetch } from "./useJsonFetch";

export const GetData = () => {
  const [ {data, isLoading, hasError} ] = useJsonFetch('http://localhost:7070/data');
  console.log(data, isLoading, hasError);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Something went wrong...</p>}

      <div className="status">
        <h4>status:</h4>
        {data && data.status}
      </div>    
    </>
  )
}
