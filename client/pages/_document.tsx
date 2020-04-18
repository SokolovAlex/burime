import { Fragment } from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

import styled from 'styled-components';

export const AuthorLine = styled.div<{isMine?: boolean}>`
    height: 1px;
    line-height: 0;
    position: relative;
    z-index: 0;
    top: -12px;
`;

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const styledComponentSheet = new StyledComponentSheets()
        const materialUiSheets = new MaterialUiServerStyleSheets()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => {
                        return styledComponentSheet.collectStyles(
                            materialUiSheets.collect(<App {...props}/>),
                        )
                    },
                })

            const initialProps = await NextDocument.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: [
                    <Fragment key="styles">
                        {initialProps.styles}
                        {materialUiSheets.getStyleElement()}
                        {styledComponentSheet.getStyleElement()}
                    </Fragment>,
                ],
            }
        } finally {
            styledComponentSheet.seal()
        }
    }
}
