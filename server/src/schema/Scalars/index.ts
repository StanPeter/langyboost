import builder from 'builder';
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars';

builder.addScalarType('Date', DateTimeResolver, {});
