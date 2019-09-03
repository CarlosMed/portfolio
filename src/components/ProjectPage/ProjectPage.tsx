import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { client } from '../../helpers/helpers';
import ProjectPageDescription from './ProjectPageDescription';

interface Props extends RouteComponentProps { }
interface JobInfo {
  sys?: object
  fields: object
}

const ProjectPage: React.FC<Props> = ( { match, history } ) => {
  const [ jobInfo, setJobInfo ] = useState<any>( {} )
  const [ jobLength, setJobLength ] = useState<string>( '' )
  const [ currentJobNumber, setCurrentJobNumber ] = useState<string>( '' )

  useEffect( () => {
    client.getEntries().then( async ( entries: any ) => {
      let items = entries.items;

      setJobInfo( items
        .map( ( entry: any ) => entry )
        .find(
          ( item: any ) => item.fields.slug === match.url.replace( '/', '' )
        ) )

      setJobLength( entries.total )

      setCurrentJobNumber(
        items
          .map( ( entry: any ) => entry )
          .findIndex(
            ( item: any ) => item.fields.slug === match.url.replace( '/', '' )
          ) + 1 )
    } );
  }, [] )

  const handleNext = (): void => {
    client.getEntries().then( ( entries: any ) => {
      let items = entries.items;
      let job = items
        .map( ( entry: any ) => entry )
        .findIndex(
          ( item: any ) => item.fields.slug === match.url.replace( '/', '' )
        );
      const next = entries.items[ job + 1 ].fields.slug;

      history.push( `/${next}` );
    } );
  };

  const handlePrev = (): void =>
    client.getEntries().then( ( entries: any ) => {
      let items = entries.items;
      let job = items
        .map( ( entry: any ) => entry )
        .findIndex(
          ( item: any ) => item.fields.slug === match.url.replace( '/', '' )
        );
      const prev = entries.items[ job - 1 ].fields.slug;

      history.push( `/${prev}` );
    } );

  const getJobDescription = () => (
    <ProjectPageDescription
      jobInfo={jobInfo.fields}
      jobLength={jobLength}
      currentJobNumber={currentJobNumber}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  )
  return (
    <>
      {jobInfo.fields !== undefined && ( <div className="description">{getJobDescription()}</div> )}
    </>
  );
}

export default ProjectPage
