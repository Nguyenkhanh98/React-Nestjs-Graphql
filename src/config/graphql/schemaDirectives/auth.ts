import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField } from 'graphql';
import { AuthenticationError, ForbiddenError } from 'apollo-server-core';


class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition( field: GraphQLField<any, any> ) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = function ( ...args ) {
            const { currentUser } = args[2]

            if ( !currentUser ) {
                throw new AuthenticationError( 'Authentication token is invalid, please try again' )
            }
            return resolve.apply( this, args );
        }
    }
}
export default AuthDirective;