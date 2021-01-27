type OsmElementType = 'node' | 'way' | 'relation';

interface BaseElement {
  type: OsmElementType;
  id: number;
  timestamp?: string;
  version?: number;
  changeset?: number;
  user?: string;
  tags?: { [key: string]: string };
}

interface OsmNode extends BaseElement {
  type: 'node';
  lat: number;
  lon: number;
}

interface OsmWay extends BaseElement {
  type: 'way';
  nodes: OsmNode[];
}

interface OsmApiWay extends BaseElement {
  type: 'way';
  nodes: number[];
}

type Member = BaseElement & {
  role?: string;
};

interface OsmRelation extends BaseElement {
  type: 'relation';
  members?: Member[];
}

interface Changeset {
  type: 'changeset';
  version?: string;
  generator?: string;
  tags?: { [key: string]: string };
}

interface OsmChange {
  type: 'osmchange';
  version?: string;
  generator?: string;
  create?: BaseElement[];
  modify?: BaseElement[];
  delete?: BaseElement[];
}

export { BaseElement, OsmNode, OsmWay, OsmApiWay, OsmRelation, Changeset, OsmChange, Member, OsmElementType };
