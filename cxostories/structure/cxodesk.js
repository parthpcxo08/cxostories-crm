import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import {
  MdPerson,
  MdDescription,
  MdLocalOffer,
  MdOutlineWeb,
  MdLocationOn,
  MdPersonPin,
  MdPinDrop,
  MdPoll,
  MdAttribution,
  MdDomain,
  MdSupervisedUserCircle,
  MdCommentBank,
} from "react-icons/md";

import { HiSpeakerphone } from "react-icons/hi";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://sanity-gatsby-blog-web-ihhmnkcw.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Collections")
    .items([
      // S.listItem()
      //   .title("Settings")
      //   .icon(MdSettings)
      //   .child(
      //     S.editor()
      //       .id("siteSettings")
      //       .schemaType("siteSettings")
      //       .documentId("siteSettings")
      //   ),
      // S.divider(),
      S.listItem()
        .title("Webinars")
        .icon(MdOutlineWeb)
        .schemaType("webinar")
        .child(S.documentTypeList("webinar").title("Webinars")),
      S.listItem()
        .title("Locations")
        .icon(MdPinDrop)
        .schemaType("location")
        .child(S.documentTypeList("location").title("Locations")),
      S.listItem()
        .title("Moderators")
        .icon(MdPersonPin)
        .schemaType("moderator")
        .child(S.documentTypeList("moderator").title("Moderators")),
      // S.listItem()
      //   .title("Polls")
      //   .icon(MdPoll)
      //   .schemaType("post")
      //   .child(S.documentTypeList("post").title("Polls")),
      S.listItem()
        .title("Keynotes")
        .icon(MdAttribution)
        .schemaType("keynote")
        .child(S.documentTypeList("keynote").title("Keynotes")),
      S.listItem()
        .title("Sponsors")
        .icon(MdDomain)
        .schemaType("sponsor")
        .child(S.documentTypeList("sponsor").title("Sponsors")),
      S.listItem()
        .title("Panelists")
        .icon(MdSupervisedUserCircle)
        .schemaType("panelist")
        .child(S.documentTypeList("panelist").title("Panelists")),
      // S.listItem()
      //   .title("Testimonials")
      //   .icon(MdCommentBank)
      //   .schemaType("testimonial")
      //   .child(S.documentTypeList("testimonial").title("Testimonials")),
      // S.divider(),
      S.listItem()
        .title("Speakers")
        .icon(HiSpeakerphone)
        .schemaType("speaker")
        .child(S.documentTypeList("speaker").title("Speakers")),
      // S.listItem()
      //   .title("Authors")
      //   .icon(MdPerson)
      //   .schemaType("author")
      //   .child(S.documentTypeList("author").title("Authors")),
      // S.listItem()
      //   .title("Categories")
      //   .icon(MdLocalOffer)
      //   .schemaType("category")
      //   .child(S.documentTypeList("category").title("Categories")),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "webinar",
            "speaker",
            "testimonial",
            "panelist",
            "keynote",
            "moderator",
            "category",
            "author",
            "post",
            "siteSettings",
            "location",
            "sponsor",
          ].includes(listItem.getId())
      ),
    ]);
