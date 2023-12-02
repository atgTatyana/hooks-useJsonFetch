import { useJsonFetch } from "./useJsonFetch";

export const GetError = () => {
  const [ {data, isLoading, hasError} ] = useJsonFetch('http://localhost:7070/error');
  console.log(data, isLoading, hasError);
  
  return (
    <>
      {isLoading && <p>Loading...</p>}

      <div className="status">
        <h4>Error:</h4>
        {hasError && hasError.message}
      </div>    

      {data && data.status}
    </>
  )
}