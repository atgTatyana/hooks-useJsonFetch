import { useJsonFetch } from "./useJsonFetch";

export const GetLoading = () => {
  const [ {data, isLoading, hasError} ] = useJsonFetch('http://localhost:7070/loading');
  console.log(data, isLoading, hasError);

  return (
    <>
      {hasError && <p>Something went wrong...</p>}

      <div className="status">
        <h4>Loading:</h4>
        {isLoading && <p>Loading...</p>}
        {data && data.status}
      </div>    
    </>
  )
}
