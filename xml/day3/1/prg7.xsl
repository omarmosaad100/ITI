<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:fo="http://www.w3.org/1999/XSL/Format">


<xsl:template match="xslTutorial">

	<xsl:for-each select="SECTION">
		<xsl:choose>
			<xsl:when test="SUMMARY">
				<xsl:text>Summary:::</xsl:text>
				<xsl:value-of select="SUMMARY"></xsl:value-of>
				<br/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>Data:::</xsl:text>
				<xsl:value-of select="DATA"></xsl:value-of>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:for-each>
	
</xsl:template>

</xsl:stylesheet>
