import { BaseElement, OsmNode, OsmWay, OsmApiWay, OsmTypes } from '..';

const isWay = (element: BaseElement): element is OsmApiWay => element.type === OsmTypes.WAY;

const isNode = (element: BaseElement): element is OsmNode => element.type === OsmTypes.NODE;

/**
 * Parses the response of the /api/0.6/way/#id/full from OsmApiWay representation to OsmWay one.
 * @param {(OsmApiWay|OsmNode)[]} elements - The elements in the response from the api
 * @returns {OsmWay | undefined} The response represented in a OsmWay implementation or undefined in any case of failure
 */
export const parseOsmWayApi = (elements: (OsmApiWay | OsmNode)[]): OsmWay | undefined => {
  const apiWay = elements.find(isWay);
  const nodes = elements.filter(isNode);
  if (apiWay === undefined || nodes.length === 0) {
    return undefined;
  }

  return {
    ...apiWay,
    nodes,
  };
};
