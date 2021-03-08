import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver, GraphQLString } from 'graphql';
import formatDate from 'dateformat';

class DateFormatDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition( field ) {
        const { resolve = defaultFieldResolver } = field;
        const { defautFormat } = this.args;
    }
}