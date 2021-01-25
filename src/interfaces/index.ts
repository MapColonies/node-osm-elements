enum OsmTypes {
  NODE = 'node',
  WAY = 'way',
  RELATION = 'relation',
  OSMCHANGE = 'osmchange',
  CHANGESET = 'changeset',
}

interface BaseElement {
  type: OsmTypes.NODE | OsmTypes.WAY | OsmTypes.RELATION;
  id: number;
  timestamp?: string;
  version?: number;
  changeset?: number;
  user?: string;
  tags?: { [key: string]: string };
}

interface OsmNode extends BaseElement {
  type: OsmTypes.NODE;
  lat: number;
  lon: number;
}

interface OsmWay extends BaseElement {
  type: OsmTypes.WAY;
  nodes: OsmNode[];
}

interface OsmApiWay extends BaseElement {
  type: OsmTypes.WAY;
  nodes: number[];
}

type Member = BaseElement & {
  role?: string;
};

interface OsmRelation extends BaseElement {
  type: OsmTypes.RELATION;
  members?: Member[];
}

interface Changeset {
  type: OsmTypes.CHANGESET;
  version?: string;
  generator?: string;
  tags?: { [key: string]: string };
}

interface OsmChange {
  type: OsmTypes.OSMCHANGE;
  version?: string;
  generator?: string;
  create?: BaseElement[];
  modify?: BaseElement[];
  delete?: BaseElement[];
}

export { BaseElement, OsmNode, OsmWay, OsmApiWay, OsmRelation, Changeset, OsmChange, Member, OsmTypes };
