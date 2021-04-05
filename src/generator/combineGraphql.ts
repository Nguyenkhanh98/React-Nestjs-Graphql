import { print } from 'graphql';
import fs from 'fs';
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const loadedFiles = loadFilesSync( path.join( __dirname, '../typeDefs/*.graphql' ) );
const typeDefs = mergeTypeDefs( loadedFiles );
const printedTypeDefs = print( typeDefs );
fs.writeFileSync( 'combined.graphql', printedTypeDefs );